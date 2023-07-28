import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { booking } from 'src/app/professional/types/professional.type';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor(private http:HttpClient) { }
  private professionalUrl="http://localhost:3000"

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
    console.log(data);
    
    return this.http.post(`${this.professionalUrl}/professional/changeprofile`,data)
  }
  posteditprofile(data:any){
    return this.http.post(`${this.professionalUrl}/professional/posteditprofile`,data)
  }
  addphoto(data:object){
    
    return this.http.post(`${this.professionalUrl}/professional/postaddimage`,data)

  }
  bookingdate(){
    return this.http.get<booking[]>(`${this.professionalUrl}/professional/getbookingdata`)
  }
}
