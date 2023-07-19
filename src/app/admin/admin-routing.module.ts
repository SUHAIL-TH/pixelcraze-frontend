import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UsersComponent } from './users/users.component';
import { BannerComponent } from './banner/banner.component';
import { ProfessionalsComponent } from './professionals/professionals.component';




const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"users",component:UsersComponent},
  {path:"banner",component:BannerComponent},
  {path:"professionals",component:ProfessionalsComponent}
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }