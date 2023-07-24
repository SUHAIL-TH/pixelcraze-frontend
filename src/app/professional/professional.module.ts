import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfesionalRoutingModule } from './professional-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { OtpComponent } from './otp/otp.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { BookingComponent } from './booking/booking.component';
import { AddphotosComponent } from './addphotos/addphotos.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    OtpComponent,
    ProfileComponent,
    FooterComponent,
    EditprofileComponent,
    BookingComponent,
    AddphotosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfesionalRoutingModule
  ]
})
export class ProfessionalModule { }
