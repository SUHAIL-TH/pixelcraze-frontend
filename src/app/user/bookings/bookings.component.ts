import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/service/user/user-service.service';
import { bookings } from '../state/usertypes/usertypes';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookingdata:bookings[] |undefined
  currentDate: string =''// Initialize currentDate with the current date



  parseDate(dateString: string): number {
    return Date.parse(dateString);
  }
  constructor(private http:HttpClient,private router:Router,private toaster:ToastrService,private userservice:UserServiceService,){}
  ngOnInit(): void {
    this.getdatas()
   this.currentDate=  new Date().toISOString();

   
    
  }
  
  getdatas(){
    this.userservice.getbookindgdatas().subscribe((res)=>{
      this.bookingdata=res
      console.log(res);
      
    },(err)=>{
      this.toaster.error('Somthing went wrong','',{progressBar:true})
    })
  }
  addreview(id:any){
    const navigationExtras = {
      queryParams: {
        proid: JSON.stringify(id)
      }
    };
    this.router.navigate(['/addreview'],navigationExtras)
  }

}
