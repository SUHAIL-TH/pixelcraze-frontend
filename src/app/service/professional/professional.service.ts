import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor(private http:HttpClient) { }
  private professionalUrl="http://localhost:3000/professional/"

  professionalSignup(data:any){
    return this.http.post(`${this.professionalUrl}postsignup`,data)
  }
  postlogin(data:any){
    console.log(data);
    
    return this.http.post(`${this.professionalUrl}postlogin`,data)
  }
}
