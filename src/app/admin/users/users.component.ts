import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectUsers, selectloaded, selectloading } from '../state/user/user.selector';
import { loaduser } from '../state/user/user.action';

import { AdminService } from 'src/app/service/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private store:Store,private adminservice:AdminService,private toaster:ToastrService){}
  users$ : any | null
  // users$=this.store.select(selectUsers)  //this way also can be used to display data in html here we want to use the async key word
  loaded$=this.store.select(selectloaded)
  loading$=this.store.select(selectloading)
  ngOnInit(): void {
    this.store.dispatch(loaduser())
    this.store.pipe(select(selectUsers)).subscribe((users: any) => {
      this.users$ = users;
    });
  }

  blockuser(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: " Do You want to block the user",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Do it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminservice.blockuser(id).subscribe((res)=>{
          this.ngOnInit()
          this.toaster.success("Blocked successfully",'',{progressBar:true})
          
        },(err)=>{
          this.toaster.error('Somthing went wrong','Error',{progressBar:true})
        })
      }
    })
   
    


  }
  unblockuser(id:string){
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Unblock the user",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Do it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminservice.unblockuser(id).subscribe((res)=>{
          this.ngOnInit()
          this.toaster.success("UnBlocked successfully",'',{progressBar:true})
          
        },(err)=>{
          this.toaster.error('Somthing went wrong','Error',{progressBar:true})        })
      }
    })

  }
  

}
