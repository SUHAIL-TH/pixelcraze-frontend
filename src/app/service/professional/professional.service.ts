import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { booking } from 'src/app/professional/types/professional.type';
import { environment } from 'src/app/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor(private http:HttpClient) { }
  private professionalUrl=environment.api

  professionalSignup(data:any){
    return this.http.post(`${this.professionalUrl}/professional/postsignup`,data)
  }
  postlogin(data:object){
    return this.http.post(`${this.professionalUrl}/professional/postlogin`,data)
  }
  getprofiledata(){
    return this.http.get(`${this.professionalUrl}/professional/getprofileData`)
  }
  loadimage(image:string){
    return (`${this.professionalUrl}/public/images/${image}`)
  }
  changeprofile(data:any){
    return this.http.post(`${this.professionalUrl}/professional/changeprofile`,data)
  }
  posteditprofile(data:any){
    return this.http.post(`${this.professionalUrl}/professional/posteditprofile`,data)
  }
  addphoto(data:object){
    return this.http.post(`${this.professionalUrl}/professional/postaddimage`,data)
  }
  bookingdate():Observable<booking[]>{
    return this.http.get<booking[]>(`${this.professionalUrl}/professional/getbookingdata`)
  }
  professionalchatlist(){
    return this.http.get(`${this.professionalUrl}/professional/professionalchatlist`)
  }
  chatblock(id:string){
    return this.http.get(`${this.professionalUrl}/professional/findchat/${id}`)
  }
  sentmessage(data:object){
    return this.http.post(`${this.professionalUrl}/professional/message`,data)
  }
  deleteimage(id:string){
    return this.http.post(`${this.professionalUrl}/professional/deleteimage/${id}`,null)
  }
}
