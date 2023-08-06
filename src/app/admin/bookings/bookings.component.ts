import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin/admin.service';
import { bookingdata } from '../state/types/user.type';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookingdata:bookingdata[]|undefined
  constructor(private service:AdminService){}
  ngOnInit(): void {
   this.service.bookingdata().subscribe((res)=>{
    console.log(res);
    
    this.bookingdata=res

   })
  }

}
