import { Component } from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  constructor(private fb:FormBuilder){}
  regsubmit=false;

  registerform=this.fb.group({
    name:["",Validators.required],
    email:["",[Validators.required,Validators.email]],
    phone:["",[Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]],
    password: ["", [Validators.required, Validators.minLength(5)]],
    cpassword:["",[Validators.required,]],


  },
  // {
  //   validators:this.MustMatch('password','cpassword')
  // }
  )
  get f(){
    return this.registerform.controls
  }
  // MustMatch(controlName:string,matchingcontrolName:string){
  //   return (FormGroup:FormGroup)=>{ 
  //     const control=FormGroup.controls[controlName]
  //     const matchingControl=FormGroup.controls[matchingcontrolName]
  //     if(matchingControl.errors && !matchingControl.errors['MustMatch']){
  //       return
  //     }
  //     if(control.value !==matchingControl.value){
  //       matchingControl.setErrors({MustMatch:true})
  //     }else{
  //       matchingControl.setErrors(null)

  //     }
  //   }

  // }
  onsubmit(){
   
    
    this.regsubmit=true
  }
  // passwordMatchValidator(control: AbstractControl) {
  //   const password = control.get('password').value;
  //   const confirmedPassword = control.get('confirmedPassword').value;

  //   if (password !== confirmedPassword) {
  //     control.get('confirmedPassword').setErrors({ passwordMismatch: true });
  //   } else {
  //     control.get('confirmedPassword').setErrors(null);
  //   }
  // }
}
