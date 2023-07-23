import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
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
  // professional$=this.store.select(selectacceptedProfessionals)
  professional$:any |null
  loading$=this.store.select(selectacceptedProfessionalsloading)
  loaded$=this.store.select(selectacceptedProfessionalsloaded)
  searchText!: string;
  page:number=1
  count:number=0
  tableSize:number=5;
  tableSizes:any=[5,10,15,20]
 
  ngOnInit(): void {
    this.store.dispatch(loadacceptedprofessional())
    this.listprofessional()
    
  }
  listprofessional(){
    this.store.pipe(select(selectacceptedProfessionals)).subscribe((professonals:any)=>{
      this.professional$=professonals 
    })
  }


  onTableDataChange(event:any){
    this.page=event
    this.listprofessional()
  }
  onTableSizeChange(event:any){
    this.tableSize=event.target.value;
    this.page=1
    this.listprofessional()
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
