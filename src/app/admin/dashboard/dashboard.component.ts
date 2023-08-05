import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin/admin.service';
import { dashboarddata } from '../state/types/user.type';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{
 
  dashboarddata!:object
  usercount!:number
  bannercount!:number
  professionalcount!:number
  bookingcount!:number
  constructor(private adminservice:AdminService){}
  ngOnInit() {
    this.loaddata()
  }
  loaddata(){
    this.adminservice.getdashboarddata().subscribe((res:any)=>{
      this.usercount=res.usercount
      this.bannercount=res.bannercount
      this.professionalcount=res.professionalverifiedcount,
      this.bookingcount=res.bookedcount
      
      


    },(err)=>{
      console.log(err)
    })

  }
  

}
