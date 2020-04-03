import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  user = new User();

  filedata:any;
  fileEvent(e){
      this.filedata = e.target.files[0];
  }

  id: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.id = JSON.parse(sessionStorage.getItem('user')).id;
    console.log(this.id);
  }

  onSubmit(f: NgForm) {
    var myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('image', this.filedata);
    this.http.post(`http://localhost:8000/api/avatar/${this.id}`, myFormData, {headers: headers})
          .subscribe(data => { console.log(data),
            window.location.reload();
            // localStorage.removeItem('user'),
            // localStorage.setItem('user', JSON.stringify(data[0]));
          }); 
  }
}
