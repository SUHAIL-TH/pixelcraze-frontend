import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Professional, bookings } from 'src/app/user/state/usertypes/usertypes';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  user_api = 'http://localhost:3000';

  userLogin(data: FormData): Observable<any> {
    return this.http.post<FormData>(`${this.user_api}/postlogin`, data);
  }
  postotp(otp: any) {
    return this.http.post(`${this.user_api}/postotp`, otp);
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
  verifyaccount(phone: any) {
    return this.http.get(`${this.user_api}/verifyaccount?phone=${phone}`);
  }
  booking(data: object) {
    return this.http.post(`${this.user_api}/booking`, data);
  }
  getbookindgdatas() {
    return this.http.get<bookings[]>(`${this.user_api}/getbookingdatas`);
  }
  chatconnection(id: any) {
    return this.http.post(`${this.user_api}/chatconnection/${id}`, null);
  }
  userchatlist() {
    return this.http.get(`${this.user_api}/userchat`);
  }
  chatblock(id: string) {
    return this.http.get(`${this.user_api}/allmessage/${id}`);
  }
  sentmessage(data: object) {
    return this.http.post(`${this.user_api}/message`, data);
  }
  addreview(data: object) {
    return this.http.post(`${this.user_api}/addreview`, data,{withCredentials:true});
  }
  getbanner(){
    return this.http.get(`${this.user_api}/getbanner`)
  }
  resetpassword(data:any){
    return this.http.post(`${this.user_api}/resetpassword`,data,{withCredentials:true})
  }
  resetemail(data:any){
    return this.http.post(`${this.user_api}/verifynumber`,data,{withCredentials:true})
  }
  resendotp(data:any){
    return this.http.post(`${this.user_api}/resentotp`,data,{withCredentials:true})
  }
}
