import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { BookingComponent } from './booking/booking.component';
import { AddphotosComponent } from './addphotos/addphotos.component';
import { ConsecutiveGuard, ProfessionalGuard } from '../guard/professional.guard';
import { ChatComponent } from './chat/chat.component';




const routes: Routes = [
    {path:'',component:LoginComponent,canActivate:[ProfessionalGuard,ConsecutiveGuard]},
    {path:'signup',component:RegisterComponent,canActivate:[ProfessionalGuard,ConsecutiveGuard]},
    {path:"home",component:HomeComponent,canActivate:[ProfessionalGuard,ConsecutiveGuard]},
    {path:'profile',component:ProfileComponent,canActivate:[ProfessionalGuard,ConsecutiveGuard]},
    {path:"editprofile",component:EditprofileComponent,canActivate:[ProfessionalGuard,ConsecutiveGuard]},
    {path:'booking',component:BookingComponent,canActivate:[ProfessionalGuard,ConsecutiveGuard]},
    {path:"addphotos",component:AddphotosComponent,canActivate:[ProfessionalGuard,ConsecutiveGuard]},
    {path:'chat',component:ChatComponent,canActivate:[ProfessionalGuard,ConsecutiveGuard]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesionalRoutingModule { }
