import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/service/user/user-service.service';
import { bookings } from '../state/usertypes/usertypes';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookingdata:bookings[] |undefined
  constructor(private http:HttpClient,private router:Router,private toaster:ToastrService,private userservice:UserServiceService){}
  ngOnInit(): void {
    this.getdatas()
    
  }
  getdatas(){
    this.userservice.getbookindgdatas().subscribe((res)=>{
      this.bookingdata=res
    },(err)=>{
      this.toaster.error('Somthing went wrong','',{progressBar:true})
    })
  }

}
