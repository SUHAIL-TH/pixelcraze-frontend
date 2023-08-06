import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BannerComponent } from './banner/banner.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { AddbannerComponent } from './addbanner/addbanner.component';
import { ProfessinalrequestComponent } from './professinalrequest/professinalrequest.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {UsersearchPipe} from '../pipes/usersearch.pipe'
import { ProfessionalsearchPipe } from '../pipes/professionalsearch.pipe';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { BookingsComponent } from './bookings/bookings.component';




@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    UsersComponent,
    HeaderComponent,
    SidebarComponent,
    BannerComponent,
    ProfessionalsComponent,
    AddbannerComponent,
    ProfessinalrequestComponent,
    UsersearchPipe,
    ProfessionalsearchPipe,
    BookingsComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    ChartModule,
    HighchartsChartModule

   

  ]
})
export class AdminModule { }
