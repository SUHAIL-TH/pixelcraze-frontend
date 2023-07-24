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
    if (token) {
      const newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
      
      

      return next.handle(newRequest);
    }

    return next.handle(request);
  }
}
