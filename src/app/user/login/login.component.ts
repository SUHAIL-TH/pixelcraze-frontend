import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder,private toaster:ToastrService) {}
  submit=false
  
  loginform=this.fb.group({
    username:["",Validators.required],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })

  get f(){
    return this.loginform.controls
  }
  onsubmit(){

    console.log("hiii");
    
    this.submit=true
  }
}
