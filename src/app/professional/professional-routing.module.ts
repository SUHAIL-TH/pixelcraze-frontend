import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { BookingComponent } from './booking/booking.component';
import { AddphotosComponent } from './addphotos/addphotos.component';




const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'signup',component:RegisterComponent},
    {path:"home",component:HomeComponent},
    {path:'profile',component:ProfileComponent},
    {path:"editprofile",component:EditprofileComponent},
    {path:'booking',component:BookingComponent},
    {path:"addphotos",component:AddphotosComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesionalRoutingModule { }
