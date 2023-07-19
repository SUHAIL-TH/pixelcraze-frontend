import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserGuardGuard } from './guard/user-guard.guard';
import { UserServiceService } from './service/user/user-service.service';
import { StoreModule } from '@ngrx/store';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({}, {})
  ],
  providers: [UserGuardGuard, UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
