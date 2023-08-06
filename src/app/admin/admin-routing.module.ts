import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UsersComponent } from './users/users.component';
import { BannerComponent } from './banner/banner.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { AddbannerComponent } from './addbanner/addbanner.component';
import { ProfessinalrequestComponent } from './professinalrequest/professinalrequest.component';
import { AdminGuard, ConsecutiveGuard } from '../guard/admin.guard';
import { BookingsComponent } from './bookings/bookings.component';




const routes: Routes = [
  {path:"",component:LoginComponent,canActivate:[AdminGuard,ConsecutiveGuard]},
  {path:"dashboard",component:DashboardComponent,canActivate:[AdminGuard,ConsecutiveGuard]},
  {path:"users",component:UsersComponent,canActivate:[AdminGuard,ConsecutiveGuard]},
  {path:"banner",component:BannerComponent,canActivate:[AdminGuard,ConsecutiveGuard]},
  {path:"professionals",component:ProfessionalsComponent,canActivate:[AdminGuard,ConsecutiveGuard]},
  {path:"addbanner",component:AddbannerComponent,canActivate:[AdminGuard,ConsecutiveGuard]},
  {path:"professionalrequest",component:ProfessinalrequestComponent,canActivate:[AdminGuard,ConsecutiveGuard]},
  {path:'booking',component:BookingsComponent,canActivate:[AdminGuard,ConsecutiveGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
