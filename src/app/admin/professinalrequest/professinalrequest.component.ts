import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadbanner, loadprofessional } from '../state/user/user.action';
import { selectBannerLoaded, selectProfessionalState, selectProfessionals, selectProfessionalsloaded, selectProfessionalsloading } from '../state/user/user.selector';
import { AdminService } from 'src/app/service/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/app/environments/environments';
@Component({
  selector: 'app-professinalrequest',
  templateUrl: './professinalrequest.component.html',
  styleUrls: ['./professinalrequest.component.css']
})
export class ProfessinalrequestComponent implements OnInit {
  
  constructor(private store:Store,private adminservice:AdminService,private toaster:ToastrService){}
  professionals$=this.store.select(selectProfessionals)
  loading$=this.store.select(selectProfessionalsloading)
  loaded$=this.store.select(selectProfessionalsloaded)
 
  ngOnInit(): void {
    this.store.dispatch(loadprofessional())
    
    
  }
  accept(id:any){
    this.adminservice.accept(id).subscribe(()=>{
      this.toaster.success('successfully accepted','',{progressBar:true})
      this.ngOnInit()

    },(err)=>{
      this.toaster.error(err.error.message,'',{progressBar:true})
    })

  }
  getImageUrl(image: string): string {
    return `${environment.api}/public/images/${image}`;
   
    
  }
 
}
