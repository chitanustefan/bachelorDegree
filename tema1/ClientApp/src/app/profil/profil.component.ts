import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { TechService } from '../service/tech.service';
import { Tech } from '../model/tech';
import { TokenService } from '../service/token.service';

type techArray = Array<Tech>

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

export class ProfilComponent implements OnInit {


  user = new User();
  surname: string;
  firstname: string;
  me = new User();
  tehnologii: techArray;
  avatar: string;
  
  constructor(private dialog: MatDialog,
    private techService: TechService,
    private tokenService: TokenService,
    ) { }

  ngOnInit(): void {
    this.tokenService.me().subscribe(
      data => { 
      sessionStorage.removeItem('user'),
      sessionStorage.setItem('user', JSON.stringify(data)),
      this.me = JSON.parse(sessionStorage.getItem('user'));
      this.surname = this.me.name.split(' ')[0];
      this.firstname = this.me.name.split(' ')[1];


      //Get tehnologii de interes
      this.techService.getTech(this.me.id).subscribe(
        data => {
          //console.log(this.me.id)
          this.tehnologii = JSON.parse(JSON.stringify(data))
        }
      );

    });


  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "100%";
    this.dialog.open(EditProfileComponent, {
      data: {name: this.user.name, avatar: this.user.avatar}
    });
  }

}
