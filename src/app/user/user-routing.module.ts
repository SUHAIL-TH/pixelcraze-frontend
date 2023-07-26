import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';
import { ConsecutiveGuard, UserGuardGuard } from '../guard/user-guard.guard';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ResetsubmitComponent } from './resetsubmit/resetsubmit.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { ProfessionalprofileComponent } from './professionalprofile/professionalprofile.component';
import { BookingformComponent } from './bookingform/bookingform.component';

const routes: Routes = [
  {path:"",component:HomeComponent,canActivate:[ConsecutiveGuard]},
  {path:"login",component:LoginComponent,canActivate:[UserGuardGuard,ConsecutiveGuard]},
  {path:"register",component:RegisterComponent,canActivate:[UserGuardGuard,ConsecutiveGuard]},
  {
    path:'otp',component:OtpComponent
  },
  {path:"resetpassword",component:ResetpasswordComponent},
  {path:"resetsubmit",component:ResetsubmitComponent},
  {path:'professionals',component:ProfessionalsComponent,canActivate:[UserGuardGuard,ConsecutiveGuard]},
  {path:"professionalprofile/:id",component:ProfessionalprofileComponent,canActivate:[UserGuardGuard,ConsecutiveGuard]},
  {path:'bookingform',component:BookingformComponent,canActivate:[UserGuardGuard,ConsecutiveGuard]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
