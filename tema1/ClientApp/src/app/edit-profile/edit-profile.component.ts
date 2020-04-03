import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../model/user';
import {FormControl} from '@angular/forms';
import { TechService } from '../service/tech.service';
import { Tech } from '../model/tech';
import { MatDialog, MatDialogConfig,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user = new User();
  item: any;
  tech = new Tech();
  domenii = new FormControl();
  list: string[] = ['Angular', 'Arduino', 'C++', 'Java','PHP', 'Python', 'React', 'Scala' ];
  tehnologii: string[];

  constructor(private techService:TechService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit(): void {
    this.user =  JSON.parse(sessionStorage.getItem('user'));
    this.tech.id_user = this.user.id;
  }


  onSubmit(){
    this.tehnologii = this.domenii.value;
    console.log(this.tehnologii);
    for (let prop of this.tehnologii) {
      this.tech.tehnologie = prop;
      this.tech.imgroot = "assets/images/" + prop + ".png";
      console.log(this.tech);
      this.techService.postTech(this.tech).subscribe(
        data => console.log(data),
      );
      // this.dialogRef.close();
      // window.location.reload();
  } 
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "100%";
    this.dialog.open(AvatarComponent, {
      data: this.user
    });
  }

}
