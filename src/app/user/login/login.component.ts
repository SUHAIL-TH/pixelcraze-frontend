import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Emitters } from '../emitters/emitter';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup
  submit=false
  constructor(private formBuilder: FormBuilder,private toaster:ToastrService,private http:HttpClient,private router:Router) {}
  ngOnInit(): void {
    this.loginform=this.formBuilder.group({
      email:["",Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  
  }
 

  onsubmit(){
    let user=this.loginform.getRawValue()
    
    
   
    if(user.email==''||user.password==''){
      this.submit=true
      this.toaster.error('Please fill the fields','',{progressBar:true})
    }else{
      this.http.post("http://localhost:3000/postlogin",user,{
        withCredentials:true
      }).subscribe((res:any)=>{
        const jwtToken =res.token;
   
        localStorage.setItem('jwt_token', jwtToken);
        
        this.toaster.success('Logined' ,'Successfully',{progressBar:true})
       
        this.router.navigate(['/'])
      },(err)=>{
       
        this.toaster.error(err.error.message,'Error',{progressBar:true})
   
      })
    }
    
    
    
  }
}
