import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Emitters } from '../emitters/emitter';
import { UserServiceService } from 'src/app/service/user/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup
  submit=false
  error : null | string
  constructor(
    private formBuilder: FormBuilder,private toaster:ToastrService,private http:HttpClient,private router:Router,
    private userService : UserServiceService
    ) {
    this.error = null
  }
  ngOnInit(): void {
    this.loginform=this.formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      password: ['', [Validators.required, ]]
    })
  
  }
 

  onsubmit(){
    let user=this.loginform.getRawValue()
    
    
   
    if(user.email==''||user.password==''){
      this.submit=true
      this.toaster.error('Please fill the fields','',{progressBar:true})
    }else{
   

      this.userService.userLogin(user).subscribe((res:any)=>{
          const jwtToken =res.token;
     
          localStorage.setItem('jwt_token', jwtToken);
          
          this.toaster.success('Logined' ,'Successfully',{progressBar:true})
         
          this.router.navigate(['/'])
        },(err)=>{
          if(err.error.message=='Your account is not verifid please verify it'){

           
            let phone={phone:err.error.phone,
            email:err.error.email}
            this.userService.verifyaccount(err.error.phone).subscribe(()=>{
              this.toaster.success('Otp sent successfully','',{progressBar:true})
              
            })
            const navigationExtras = {
              queryParams: {
                data: JSON.stringify(phone)
              }
            };
            
            this.toaster.error(err.error.message,'',{progressBar:true})
            this.toaster.success('otp has sent to your phone number','',{progressBar:true})
      
            this.router.navigate(['/otp'], navigationExtras)
            

          }else{
            this.error = err.error.message
             this.toaster.error(err.error.message,'',{progressBar:true})

          }
        })
    }
    
    
    
  }
}
