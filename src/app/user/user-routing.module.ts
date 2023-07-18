import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';
import { UserGuardGuard } from '../guard/user-guard.guard';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ResetsubmitComponent } from './resetsubmit/resetsubmit.component';

const routes: Routes = [
  {path:"",component:HomeComponent,},
  {path:"login",component:LoginComponent,canActivate:[UserGuardGuard]},
  {path:"register",component:RegisterComponent,},
  {
    path:'otp',component:OtpComponent
  },
  {path:"resetpassword",component:ResetpasswordComponent},
  {path:"resetsubmit",component:ResetsubmitComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
