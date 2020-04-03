import { Component, OnInit } from '@angular/core';
import { Email } from '../model/email';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailObj= new Email();
  name: string;
  email: string;
  subject: string;
  message: string;
  submitted = false;


  constructor(private emailService: EmailService) {
    this.emailObj = new Email();
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.emailService.send_email(this.emailObj)
    .subscribe(
      data => {
        console.log(data);
        this.submitted = true;
      },
      error => console.log(error));
  this.emailObj = new Email();

  }

}
