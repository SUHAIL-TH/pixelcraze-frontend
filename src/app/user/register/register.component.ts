import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import {  FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform!:FormGroup 
  regsubmit=false;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private toastr:ToastrService){}

  ngOnInit(): void {
    
    this.registerform=this.formBuilder.group({
      name:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
        phone:["",[Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        cpassword:["",[Validators.required,]],
    })
    

  } 

  

 
  onsubmit(){
    let user=this.registerform.getRawValue()
    
    
    this.regsubmit=true
    // if(this.registerform.invalid){
    //   return
    // }
    
    if(user.name==''||user.email==''||user.password==""||user.phone==''){
      this.toastr.error('Please filled the fileds' ,'', {
      progressBar: true
    })
    }else {
      this.http.post("http://localhost:3000/signup",user,{
        withCredentials:true
      }).subscribe(()=>{this.toastr.success(' Success', 'Registered', { progressBar: true });this.router.navigate(['/'])},(err)=>{
        this.toastr.error(err.error.message ,'', {
          progressBar: true
        })
      })
    }

    
    
    
    
   
    
  }


}
//////////////////////////////////////////////////
// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   form!: FormGroup;
//   regsubmit = false;

//   constructor(
//     private formBuilder: FormBuilder,
//     private http: HttpClient,
//     private router: Router,
//     private toastr: ToastrService
//   ) {}

//   ngOnInit(): void {
//     this.form = this.formBuilder.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(5)]],
//       phone: ['', [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]],
//       cpassword: ['', Validators.required]
//     });
//   }

//   get f() {
//     return this.form.controls;
//   }

//   onsubmit() {
//     this.regsubmit = true;

//     if (this.form.invalid) {
//       this.toastr.error('Please fill in all required fields', '', { progressBar: true });
//       return;
//     }

//     const user = this.form.getRawValue();
//     console.log(user);
    

//     this.http.post("http://localhost:3000/signup", user, { withCredentials: true }).subscribe(
//       () => {
//         this.toastr.success('Registration successful', '', { progressBar: true });
//         this.router.navigate(['/']);
//       },
//       (err) => {
//         this.toastr.error(err.error.message, '', { progressBar: true });
//       }
//     );
//   }

 
// }












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



  
