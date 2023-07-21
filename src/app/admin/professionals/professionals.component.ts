import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/service/admin/admin.service';
import { selectacceptedProfessionals, selectacceptedProfessionalsloaded, selectacceptedProfessionalsloading } from '../state/user/user.selector';
import { loadacceptedprofessional } from '../state/user/user.action';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent {
  constructor(private store:Store,private adminservice:AdminService,private toaster:ToastrService){}
  professional$=this.store.select(selectacceptedProfessionals)
  loading$=this.store.select(selectacceptedProfessionalsloading)
  loaded$=this.store.select(selectacceptedProfessionalsloaded)
 
  ngOnInit(): void {
    this.store.dispatch(loadacceptedprofessional())
    
    
  }
  block(id:any){
    this.adminservice.blockprofessional(id).subscribe(()=>{
      this.toaster.success('Blocked','',{progressBar:true})
      this.ngOnInit()
    },(err)=>{
      this.toaster.error(err.error.message,'',{progressBar:true})
    })

  }
  unblock(id:any){
    this.adminservice.unblockprofessional(id).subscribe(()=>{
      this.toaster.success('Un Blocked','',{progressBar:true})
      this.ngOnInit()

    },(err)=>{
      this.toaster.error(err.error.message,'',{progressBar:true})
    })

  }
}
