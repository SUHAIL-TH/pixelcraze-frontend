import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard  {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):any {

    const jwtToken = localStorage.getItem('jwt_token');
  

    
    

    if (jwtToken) {
      
      this.router.navigate(['/'])
      return false
      
    } else {
      
       return true
   
    }
  }
}
