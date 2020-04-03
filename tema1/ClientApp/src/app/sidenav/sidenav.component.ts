import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  selected = 'ro';
  public loggedIn: boolean;

  constructor(private router: Router,
    private authService: AuthService,
    private tokenService: TokenService,
    private translate: TranslateService){
    translate.setDefaultLang(this.selected);
  }

  ngOnInit(): void {
    this.authService.authStatus.subscribe(
      value => this.loggedIn = value
    );
  }

  @Output() sidenavClose = new EventEmitter();

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this.tokenService.remove();
    this.authService.changeStatus(false);
    this.router.navigateByUrl('/login');
  }

}
