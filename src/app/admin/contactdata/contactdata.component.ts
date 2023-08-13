import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/service/admin/admin.service';

@Component({
  selector: 'app-contactdata',
  templateUrl: './contactdata.component.html',
  styleUrls: ['./contactdata.component.css']
})
export class ContactdataComponent implements OnInit {
  contactData:any
  constructor(private adminservice:AdminService , private toaster:ToastrService){}
  ngOnInit(): void {
    this.contactdata()
  }
  contactdata(){
    this.adminservice.contactdata().subscribe((res)=>{
      this.contactData=res
    })
  }

}
