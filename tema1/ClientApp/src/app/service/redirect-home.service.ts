import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectHomeService {

  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log("aici");
    if (!this.tokenService.loggedIn()) {
      this.router.navigate(['login']);
    }
    return true;
  }
}
