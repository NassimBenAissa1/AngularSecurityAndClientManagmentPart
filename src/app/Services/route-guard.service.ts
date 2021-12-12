import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(
    private authenticationService : AuthenticationServiceService,
    private router :Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.authenticationService.isUserLoggedIn())
      return true ;
    this.authenticationService.logout();
    this.router.navigate(['login']);
    return false ;
  }
}
