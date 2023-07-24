import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professional } from 'src/app/user/state/usertypes/usertypes';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  user_api = 'http://localhost:3000';

  userLogin(data: FormData): Observable<any> {
    return this.http.post<FormData>(`${this.user_api}/postlogin`, data);
  }
  postotp(otp:any){
    return this.http.post(`${this.user_api}/postotp`,otp)
  }

  userSignup(data: FormData): Observable<any> {
    return this.http.post(`${this.user_api}/signup`, data);
  }
  getprofessionallist() {
    return this.http.get<Professional[]>(
      `${this.user_api}/getprofessionallist`
    );
  }
  getdetailsprofessional(id: string) {
   

    return this.http.get(`${this.user_api}/professionaldata?id=${id}`);
  }
  verifyaccount(phone:any){
 
    
    return this.http.get(`${this.user_api}/verifyaccount?phone=${phone}`)
  }
}
