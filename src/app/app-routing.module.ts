import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"",loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:"admin",loadChildren:()=>import("./admin/admin.module").then(m=>m.AdminModule)},
  {path:"professional",loadChildren:()=>import("./professional/professional.module").then(m=>m.ProfessionalModule)},
  
  { path: '**', component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
