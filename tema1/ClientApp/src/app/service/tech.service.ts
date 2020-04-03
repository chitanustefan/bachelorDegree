import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tech } from '../model/tech';
import { Com } from '../model/com';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  constructor(private http: HttpClient) { }


  getTech(id: number){

    return this.http.get(`http://localhost:8000/api/tech/${id}`);

  } 

  getComms(){

    return this.http.get(`http://localhost:8000/api/comment`);

  }

  postCom(com: Com){
    return this.http.post('http://localhost:8000/api/comment', com);
  }

  get(){
    return sessionStorage.getItem('token');
  }

  postTech(tech: Tech){
  
    // var t = this.get();

    // var headers_object = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //    'Authorization': "Bearer "+ t 
    // })

    //     const httpOptions = {
    //       headers: headers_object,
    //       body: tech
    //     };

    // return this.http.post('http://localhost:8000/tech', {limit:10}, httpOptions)

     return this.http.post('http://localhost:8000/api/tech', tech);
  }

}
