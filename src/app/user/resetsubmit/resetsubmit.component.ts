import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/service/user/user-service.service';

@Component({
  selector: 'app-resetsubmit',
  templateUrl: './resetsubmit.component.html',
  styleUrls: ['./resetsubmit.component.css']
})
export class ResetsubmitComponent implements OnInit {
  resetpassform!:FormGroup
  forsubmit=false;
  token!: string;
  email!:string
  constructor(private userservice:UserServiceService,private route: ActivatedRoute,private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private toastr:ToastrService){}
  ngOnInit(): void {
    this.token = this.route.snapshot.queryParams['token'];
    this.email = this.route.snapshot.queryParams['email'];
    this.resetpassform=this.formBuilder.group({
     
      password: ["", [Validators.required,]],
      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')
       
    })

    
   
  }
  onsubmit(){
    let data=this.resetpassform.getRawValue()
    
    data.token=this.token
    data.email=this.email
    if(data.password==""){
      this.forsubmit=true
      this.toastr.error('Please fill the field' ,'Error',{progressBar:true})

    }else{
      // this.http.post('http://localhost:3000/resetpassword',data,{withCredentials:true})
      this.userservice.resetpassword(data).subscribe(()=>{
        this.toastr.success('Password changed successfully','',{progressBar:true})
        this.router.navigate(['/login'])
      },(err)=>{
        this.toastr.error(err.error.message,'',{progressBar:true})
      })
    }
   
    
  }
}
