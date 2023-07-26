import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProfessionalInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('jwt_token')
    let professionaltoken=localStorage.getItem("jwt_token_professional")
    let admintoken=localStorage.getItem("jwt_token_professional")
    if (token) {
      const newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
     
      
      

      return next.handle(newRequest);
    }
    if (professionaltoken) {
      const newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + professionaltoken)
      });
     
      
      

      return next.handle(newRequest);
    }
    if (admintoken) {
      const newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + admintoken)
      });
     
      
      

      return next.handle(newRequest);
    }

    return next.handle(request);
  }
}
