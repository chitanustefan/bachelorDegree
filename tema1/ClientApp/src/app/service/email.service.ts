import { Injectable } from '@angular/core';
import { Email } from '../model/email';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private urlSendEmail: string;

  constructor(private http: HttpClient) {
    this.urlSendEmail = 'http://localhost:8000/send-email'; 
    }

  public send_email(email: Email): Observable<Email>{
    console.log(email.name);
    return this.http.post<Email>(`${this.urlSendEmail}/`, email);
  }
}
