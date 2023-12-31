import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ConsecutiveGuard, UserGuardGuard } from './guard/user-guard.guard';
import { UserServiceService } from './service/user/user-service.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './admin/state/user/user.effects';
import { acceptedprofessionalReducer, bannerReducer, professionalReducer, userReducer } from './admin/state/user/user.reducer';
import { professionallistreducer } from './user/state/userstate/userstate.reducer';
import { UserStateEffects } from './user/state/userstate/userstate.effects';
import { ProfessionalInterceptor } from './interceptor/professional.interceptor';
import { AdminGuard } from './guard/admin.guard';
import { ProfessionalGuard } from './guard/professional.guard';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {MatButtonModule} from '@angular/material/button';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerSideErrorComponent } from './server-side-error/server-side-error.component';
import { environment } from './environments/environments';





const config: SocketIoConfig = { url: `${environment.api}`, options: {} };





@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ServerSideErrorComponent,
    
   
   
 
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    SocketIoModule.forRoot(config),
    StoreModule.forRoot({users:userReducer,banners:bannerReducer,professionals:professionalReducer,acceptedprofessionals:acceptedprofessionalReducer,professionalslist:professionallistreducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([UserEffects,UserStateEffects]),
    MatButtonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ProfessionalInterceptor, multi: true },
    UserGuardGuard,AdminGuard,ProfessionalGuard, UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { NgModule, isDevMode } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';
// import { UserGuardGuard } from './guard/user-guard.guard';
// import { UserServiceService } from './service/user/user-service.service';
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { EffectsModule } from '@ngrx/effects';
// import { UserEffects } from './admin/state/user/user.effects';
// import { acceptedprofessionalReducer, bannerReducer, professionalReducer, userReducer } from './admin/state/user/user.reducer';
// import { professionallistreducer } from './user/state/userstate/userstate.reducer';
// import { UserStateEffects } from './user/state/userstate/userstate.effects';
// import { ProfessionalInterceptor } from './interceptor/professional.interceptor';







// @NgModule({
//   declarations: [
//     AppComponent,
 
    
//   ],
//   imports: [
    
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     BrowserAnimationsModule,
//     ToastrModule.forRoot(),
//     StoreModule.forRoot({users:userReducer,banners:bannerReducer,professionals:professionalReducer,acceptedprofessionals:acceptedprofessionalReducer,professionalslist:professionallistreducer}),
//     StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
//     EffectsModule.forRoot([UserEffects,UserStateEffects]),
   
//   ],
//   providers: [
//     { provide: HTTP_INTERCEPTORS, useClass: ProfessionalInterceptor, multi: true },
//     UserGuardGuard, UserServiceService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
