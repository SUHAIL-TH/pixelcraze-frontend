import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const jwtToken = localStorage.getItem('jwt_token_admin');
    const loginRoute = '/admin';

    if (
      state.url !== loginRoute &&
      
      jwtToken === null
    ) {
      this.router.navigate(['/admin']);
      return false;
    } else if (
      (state.url === loginRoute) &&
      jwtToken !== null
    ) {
      this.router.navigate(['/admin/dashboard']);
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
    const professional = localStorage.getItem('jwt_token_professional');
    const user = localStorage.getItem('jwt_token');
    if (professional) {
      this.router.navigate(['/professional/home']);
      return false;
    } else if (user) {
       this.router.navigate(['/']);
       return false;
    } else {
      return true;
    }
  }
}
