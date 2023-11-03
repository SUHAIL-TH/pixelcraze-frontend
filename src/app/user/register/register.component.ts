import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/service/user/user-service.service';

import { PasswordStrengthValidator } from './validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerform!: FormGroup;
  regsubmit = false;
  constructor(
    private userService: UserServiceService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.registerform = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)],
      ],
      password: [
        '',
        [
          Validators.required,
          PasswordStrengthValidator,
          // Validators.pattern(
          //   '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}$'
          // ),
          Validators.minLength(8),
        ],
      ],
      // cpassword: ['', [Validators.required]],
    });
  }
  onsubmit() {
    let user = this.registerform.getRawValue();
    console.log(user)
    console.log(this.registerform.valid)
    if (!this.registerform.valid) {
      this.regsubmit = true;
      this.toastr.error('Please fill the fileds', '', {
        progressBar: true,
      });
    } else {
      this.userService.userSignup(user).subscribe(
        (res) => {
          this.toastr.success('OTP has sent', 'Successfully', {
            progressBar: true,
          });
          const navigationExtras = {
            queryParams: {
              data: JSON.stringify(res.data),
            },
          };
          this.router.navigate(['/otp'], navigationExtras);
        },
        (err) => {
          this.toastr.error(err.error.message, '', {
            progressBar: true,
          });
        }
      );
    }
  }
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
