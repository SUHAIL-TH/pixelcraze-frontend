  import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBannerLoaded, selectBannerLoading, selectBanners,  } from '../state/user/user.selector';
import { loadbanner } from '../state/user/user.action';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/service/admin/admin.service';
import { environment } from 'src/app/environments/environments';



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  constructor(private store:Store,private toaster:ToastrService,private adminservice:AdminService){}
   banners$=this.store.select(selectBanners)  //this way also can be used to display data in html here we want to use the async key word
   loaded$=this.store.select(selectBannerLoaded)
   loading$=this.store.select(selectBannerLoading)
  ngOnInit(): void {
    this.store.dispatch(loadbanner())
  }
  getImageUrl(image: string): string {
    return `${environment.api}/public/images/${image}`;
   
    
  }
  blockbanner(id:any){
    this.adminservice.blockbanner(id).subscribe((res)=>{
      console.log("blockbanner");
      this.toaster.success('Banner blocked','',{progressBar:true})
      this.ngOnInit()
     
    },(err)=>{
      this.toaster.error(err.error.message,'',{progressBar:true})
    })

  }
  unblockbanner(id:any){
    console.log("unblockbanner");
    
    this.adminservice.unblockbanner(id).subscribe((res)=>{
      this.toaster.success('Banner Unblocked','',{progressBar:true})
      this.ngOnInit()
     
    },(err)=>{
      this.toaster.error(err.error.message,'',{progressBar:true})
    })

  }

}
