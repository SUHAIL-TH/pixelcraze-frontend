import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot,CanActivate,Router, RouterStateSnapshot,UrlTree,} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserGuardGuard {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const jwtToken = localStorage.getItem('jwt_token');
    const loginRoute = '/login';
    const signupRoute = '/register';
    // if (jwtToken) {
    //   this.router.navigate(['/']);
    //   return false;
    // } else {
    //   return true;
    // }
    if (
      state.url !== loginRoute &&
      state.url !== signupRoute &&
     
      jwtToken === null
    ) {
      this.router.navigate(['/']);
      return false;
    } else if (
      (state.url === loginRoute || state.url === signupRoute) &&
      jwtToken !== null
    ) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}


@Injectable({
  providedIn: 'root',
})
export class ConsecutiveGuard implements CanActivate {
  constructor(private router : Router){}

  canActivate() {
    const admin = localStorage.getItem('jwt_token_admin');
    const professional = localStorage.getItem('jwt_token_professional');
    if (admin) {
      this.router.navigate(['/admin/dashboard']);
      return false;
    } else if (professional) {
       this.router.navigate(['/professional/home']);
       return false;
    } else {
      return true;
    }
  }
}
