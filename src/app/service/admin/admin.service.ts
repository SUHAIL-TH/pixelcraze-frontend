import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { User ,Banner, Professional} from 'src/app/admin/state/types/user.type';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  private adminurl="http://localhost:3000/admin/"
  getUser() : Observable<User[]>{
    return this.http.get<User[]>(`${this.adminurl}getusers`)
  }

  blockuser(id:any){
    return this.http.post(`${this.adminurl}blockuser/${id}`,null)
  }
  unblockuser(id:string){
    console.log("hii");
    
    return this.http.post(`${this.adminurl}unblockuser/${id}`,null)
  }
  addbanner(data:any){
    return this.http.post(`${this.adminurl}addbanner`,data)
  }
  getbanner(){
    return this.http.get<Banner[]>(`${this.adminurl}getbanner`)
  }
  blockbanner(id:string){
    return this.http.post(`${this.adminurl}blockbanner/${id}`,null)
  }
  unblockbanner(id:string){
    return this.http.post(`${this.adminurl}unblockbanner/${id}`,null)
  }
  getprofessional(){
    return this.http.get<Professional[]>(`${this.adminurl}getprofessionals`)
  }
  accept(id:string){
    return this.http.post(`${this.adminurl}acceptprofessional/${id}`,null)
  }
  getacceptedprofessional(){
    return this.http.get<Professional[]>(`${this.adminurl}getacceptedprofessionals`)
  }
  blockprofessional(id:string){
    return this.http.post(`${this.adminurl}/blockprofessional/${id}`,null)
  }
  unblockprofessional(id:string){
    return this.http.post(`${this.adminurl}/unblockprofessional/${id}`,null)
  }
}
