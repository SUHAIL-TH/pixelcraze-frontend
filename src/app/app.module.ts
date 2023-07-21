import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserGuardGuard } from './guard/user-guard.guard';
import { UserServiceService } from './service/user/user-service.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './admin/state/user/user.effects';
import { acceptedprofessionalReducer, bannerReducer, professionalReducer, userReducer } from './admin/state/user/user.reducer';
import { UsersearchPipe } from './pipes/usersearch.pipe';





@NgModule({
  declarations: [
    AppComponent,
    UsersearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({users:userReducer,banners:bannerReducer,professionals:professionalReducer,acceptedprofessionals:acceptedprofessionalReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([UserEffects,]),
   
  ],
  providers: [UserGuardGuard, UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
