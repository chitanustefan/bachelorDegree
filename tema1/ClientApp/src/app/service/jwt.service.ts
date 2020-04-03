import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) { }

  register(data){
    return this.http.post('http://localhost:8000/api/register',data)
  }

  login(data){
    return this.http.post('http://localhost:8000/api/login',data)
  }



}
