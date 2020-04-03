import { Injectable } from '@angular/core';
import { decode } from 'punycode';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  private iss ={
    login : 'http://localhost:8000/api/login',
    register : 'http://localhost:8000/api/register'
  }

  constructor(private http: HttpClient) { }

  handle(token){
    this.set(token);
  }

  set(token){
    sessionStorage.setItem('token',token);
    //localStorage.setItem('token',token);
  }

  get(){
    return sessionStorage.getItem('token');
  }

  remove(){
    //localStorage.removeItem('token');
    sessionStorage.clear();
  }

  me(){
    
    var t = this.get();

    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+ t 
    })

        const httpOptions = {
          headers: headers_object
        };

    return this.http.post('http://localhost:8000/api/me', {limit:10}, httpOptions)
  }

  isValid(){
    const token = this.get();
    if(token){
      const payload = this.payload(token);
      if(payload){
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload){
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    return this.isValid();
  }

}
