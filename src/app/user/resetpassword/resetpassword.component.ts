import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent  implements OnInit{

  resetform!:FormGroup
  forsubmit=false;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private toastr:ToastrService){}
  ngOnInit(): void {
    this.resetform=this.formBuilder.group({
     
      email:["",[Validators.required,Validators.email]],
        phone:["",[Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]],
       
    })
   
  }
  onsubmit(){
    let data=this.resetform.getRawValue()
    console.log(data.email);
    
    if(data.email==''){
      this.forsubmit=true
      this.toastr.error( 'Please fill the fields','Error',{progressBar:true})
    }else{
      this.http.post('http://localhost:3000/verifynumber',data,{
        withCredentials:true
      }).subscribe(()=>{
        this.toastr.success('Check your email and reset Password','',{progressBar:true})
        
      },(err)=>{
        this.toastr.error(err.error.message ,'', {
          progressBar: true
        })
      })
    }
  }

}
