import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { OtpComponent } from './otp/otp.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ResetsubmitComponent } from './resetsubmit/resetsubmit.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { FooterComponent } from './footer/footer.component';
import { ProfessionalprofileComponent } from './professionalprofile/professionalprofile.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './chat/contact/contact.component';
import { AddreviewComponent } from './addreview/addreview.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    OtpComponent,
    ResetpasswordComponent,
    ResetsubmitComponent,
    ProfessionalsComponent,
    FooterComponent,
    ProfessionalprofileComponent,
    BookingformComponent,
    BookingsComponent,
    ChatComponent,
    ContactComponent,
    AddreviewComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
})
export class UserModule { }
