import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitter';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  authenticated=false
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    const jwtToken = localStorage.getItem('jwt_token');
  
    
    if(jwtToken!=null){
      this.authenticated=true
    }
      
    
  //  const arr= Emitters.authEmitter.subscribe((auth:boolean)=>{
  //     this.authenticated=auth
  //   })
    
    
  }
  logout(){
    localStorage.clear();
  }
  

}
