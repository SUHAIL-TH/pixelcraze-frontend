import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/app/environments/environments';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  adminlogform!:FormGroup 
  regsubmit=false;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private toastr:ToastrService){}

  ngOnInit(): void {
    
    this.adminlogform=this.formBuilder.group({
     
      email:["",[Validators.required,Validators.email]],
       
        password: ["", [Validators.required, Validators.minLength(5)]],
       
    })
    

  } 

  
  
 
  onsubmit(){
    let user=this.adminlogform.getRawValue()
   
    if(user.email==''||user.password==""){
      this.regsubmit=true
      this.toastr.error('Please fill the fileds' ,'', {
      progressBar: true
    })
    }else {
      this.http.post(`${environment.api}/admin/postlogin`,user,{
        withCredentials:true
      }).subscribe((res:any)=>{
      
        const jwtToken:string=res;
      
        
        localStorage.setItem('jwt_token_admin',jwtToken)
        this.toastr.success('Logined','Successfully', { progressBar: true });
      
      console.log("hiii");
      
      this.router.navigate(['/admin/dashboard'])},(err)=>{
        this.toastr.error(err.error.message ,'', {
          progressBar: true
        })
      })
    }

    
    
    
    
   
    
  }

}
