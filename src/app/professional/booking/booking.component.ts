import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProfessionalService } from 'src/app/service/professional/professional.service';
import { booking } from '../types/professional.type';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {
  bookingdata:booking[]|undefined
  constructor(private service:ProfessionalService,private http:HttpClient,private toaster:ToastrService){}
  ngOnInit(): void {
    this.getbookingdate()
  }
  getbookingdate(){
    this.service.bookingdate().subscribe((res)=>{
      this.bookingdata=res
      
    },(err)=>{
      console.log(err)
    })
  }

}
