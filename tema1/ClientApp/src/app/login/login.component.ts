import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { JwtService } from '../service/jwt.service';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor(private tokenService: TokenService,
    private registerService: JwtService, 
    private http: HttpClient,
    private authService: AuthService,
    private router: Router) { }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  public error = null;

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user.email);
    console.log(this.user.password);
    this.registerService.login(this.user).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.tokenService.handle(data.access_token);
    this.authService.changeStatus(true);
    this.tokenService.me().subscribe(
      me => sessionStorage.setItem('user', JSON.stringify(me))
    );
    this.router.navigateByUrl('/home');
  }

  handleError(error){
    this.error = error.error.error;
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}
