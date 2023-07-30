import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authenticated=false
  constructor(private router:Router){}
  ngOnInit(): void {
    const jwtToken = localStorage.getItem('jwt_token_admin');
  
    
    if(jwtToken!=null){
      this.authenticated=true
    }
      
    
  //  const arr= Emitters.authEmitter.subscribe((auth:boolean)=>{
  //     this.authenticated=auth
  //   })
    
    
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/admin'])
  }

}
