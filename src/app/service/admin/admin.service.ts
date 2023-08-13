import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { User ,Banner, Professional, bookingdata} from 'src/app/admin/state/types/user.type';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  private adminurl="http://localhost:3000"
  
  getUser() : Observable<User[]>{
    return this.http.get<User[]>(`${this.adminurl}/admin/getusers`)
  }

  blockuser(id:any){
    return this.http.post(`${this.adminurl}/admin/blockuser/${id}`,null)
  }
  unblockuser(id:string){
    console.log("hii");
    
    return this.http.post(`${this.adminurl}/admin/unblockuser/${id}`,null)
  }
  addbanner(data:any){
    return this.http.post(`${this.adminurl}/admin/addbanner`,data)
  }
  getbanner(){
    return this.http.get<Banner[]>(`${this.adminurl}/admin/getbanner`)
  }
  blockbanner(id:string){
    return this.http.post(`${this.adminurl}/admin/blockbanner/${id}`,null)
  }
  unblockbanner(id:string){
    return this.http.post(`${this.adminurl}/admin/unblockbanner/${id}`,null)
  }
  getprofessional(){
    return this.http.get<Professional[]>(`${this.adminurl}/admin/getprofessionals`)
  }
  accept(id:string){
    return this.http.post(`${this.adminurl}/admin/acceptprofessional/${id}`,null)
  }
  getacceptedprofessional(){
    return this.http.get<Professional[]>(`${this.adminurl}/admin/getacceptedprofessionals`)
  }
  blockprofessional(id:string){
    return this.http.post(`${this.adminurl}/admin//blockprofessional/${id}`,null)
  }
  unblockprofessional(id:string){
    return this.http.post(`${this.adminurl}/admin//unblockprofessional/${id}`,null)
  }
  getdashboarddata(){
    return this.http.get(`${this.adminurl}/admin/dashboarddata`)
  }
  bookingdata(){
    return this.http.get<bookingdata[]>(`${this.adminurl}/admin/bookingdata`)
  }
  contactdata(){
    return this.http.get(`${this.adminurl}/admin/contacteddata`)
  }
}
