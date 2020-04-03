import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { JwtService } from '../service/jwt.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  confpassword: string;
  password: string;
  
  constructor(private registerService: JwtService,
    private tokenService: TokenService,
     private router: Router) { }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  public error = [];

  public form = {
    email:null,
    name:null,
    password:null,
    password_confirmation:null,
  };

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.email);
    console.log(this.form.name);
    console.log(this.form.password);
    console.log(this.form.password_confirmation);
    this.registerService.register(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),

    );
  }

  handleResponse(data){
    this.tokenService.handle(data.access_token);
    this.router.navigateByUrl('/home');
  }

  handleError(error){
    this.error = error.error.errors.password;
  }


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}
