import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   constructor(private router:Router){}
  authenticated:boolean=false
    ngOnInit(): void {
     const jwttoken=localStorage.getItem("jwt_token_professional")
     if(jwttoken){
      this.authenticated=true
     }
    }

    logout(){
      localStorage.clear()
      this.router.navigate(['/professional'])
    }
    
    
   
} 
