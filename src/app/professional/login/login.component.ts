import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfessionalService } from 'src/app/service/professional/professional.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginforms!:FormGroup
  submit=false
  error : null | string
  constructor(private professionalService:ProfessionalService,private formBuilder: FormBuilder,private toaster:ToastrService,private http:HttpClient,private router:Router) {
    this.error = null
  }
  ngOnInit(): void {
    this.loginforms=this.formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      password: ['', [Validators.required, ]]
    })
  
  }
 

  onsubmit(){
    let professionalData=this.loginforms.getRawValue()
    
    
   
    if(professionalData.email==''||professionalData.password==''){
      this.submit=true
      this.toaster.error('Please fill the fields','',{progressBar:true})
    }else{
     this.professionalService.postlogin(professionalData).subscribe((res:any)=>{
        const jwtToken =res.token;
   
        localStorage.setItem('jwt_token', jwtToken);
        
        this.toaster.success('Login' ,'Successfully',{progressBar:true})
       
        this.router.navigate(['/professional/home'])
      },(err)=>{
      
      console.log(err);
      
        this.toaster.error(err.error.message,'',{progressBar:true})
   
      })
    }
    
    
    
  }

}
