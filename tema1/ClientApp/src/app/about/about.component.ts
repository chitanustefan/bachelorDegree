import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TokenService } from '../service/token.service';
import { User } from '../model/user';
import { TechService } from '../service/tech.service';
import { Com } from '../model/com';
import {NgForm} from '@angular/forms';

type comArray = Array<Com>

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})



export class AboutComponent implements OnInit {


  me = new User();
  com: comArray;
  comentariu = new Com();
  desc: string;

  constructor(private translate: TranslateService,
    private tokenService: TokenService,
    private techService: TechService){
      this.comentariu = new Com();
  }



  ngOnInit(): void {
      this.me = JSON.parse(sessionStorage.getItem('user'));
      //Get comentarii
      this.techService.getComms().subscribe(
        data => {
           console.log(data)
           this.com = JSON.parse(JSON.stringify(data))
        } 
      );
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  onSubmit(f: NgForm){
    this.comentariu.nume = this.me.name;
    this.comentariu.id_user = this.me.id;
    this.comentariu.imgroot = this.me.avatar;
    this.comentariu.desc = f.value.desc;
    //console.log(f.value.desc);
    this.techService.postCom(this.comentariu).subscribe(
        data => {
          console.log(data)
      }
    ); 
  }


}
