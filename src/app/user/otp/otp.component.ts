import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent  implements OnInit{
  otpform!:FormGroup
  otpsubmit=false
  user:any
  dataphone:any
  
  constructor(private toaser:ToastrService,private formBuilder:FormBuilder,private activateroutes:ActivatedRoute,private http:HttpClient,private router:Router){}
  ngOnInit(): void {

    this.activateroutes.queryParams.subscribe(params => {
      this.user= JSON.parse(params['data']);
      // if (dataFromBackend !== undefined) {
      //   try {
      //     this.dataphone = JSON.parse(dataFromBackend);
      //     // Use the parsed data as needed
      //   } catch (error) {
      //     console.log('Error parsing JSON:', error);
      //   }
      // }
    });
    this.otpform=this.formBuilder.group({
      otp:["",[Validators.required,Validators.minLength(6)]],
    
    })
   
  } 
  otpValue!: string;

  submitForm() {
    
    
    let otp=this.otpform.getRawValue()
    this.otpsubmit=true
    otp.phone=this.user
    console.log(otp);
    
    
    if (otp.otp=='') {
      
      this.toaser.error("Please Enter the otp",'',{progressBar:true})
    } else {
      this.http.post("http://localhost:3000/postotp",otp,{
      withCredentials:true
     }).subscribe(()=>{this.toaser.success('Registered',"successfully",{progressBar:true}),this.router.navigate(['/login'])},(err)=>{
      this.toaser.error(err.error.message,'',{progressBar:true})
     })
     
      
    }
  }

}
