import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfessionalService } from 'src/app/service/professional/professional.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  editform!: FormGroup;
  profileData:any
  submit=false;
  constructor(private router:Router,private service:ProfessionalService,private http:HttpClient,private FormBuilder:FormBuilder,private toaster:ToastrService){}
  ngOnInit(): void {
    this.editform=this.FormBuilder.group({
      name:["",Validators.required],
      ownername:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
        phone:["",[Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]],
        place:['',Validators.required],
        experinces:['',Validators.required],
        aboutus:['',Validators.required],
        specialized:['',Validators.required]
        
    })
    
    this.loadprofile();
  }
   

  loadprofile() {
    this.service.getprofiledata().subscribe((res: any) => {
      this.profileData = res;
     
      
      this.editform.patchValue({
        name: res.name,
        ownername:res.ownername,
        phone:res.phone,
        place:res.place,
        experinces:res.experinces,
        aboutus:res.aboutus,
        email:res.email,
        specialized:res.specialized
        

      });
      
    });

  }
  onsubmit(){
  
    
    let data=this.editform.getRawValue()
   
    
    this.service.posteditprofile(data).subscribe(()=>{
      this.toaster.success('success','',{progressBar:true})
      this.router.navigate(['/professional/profile'])
    },(err)=>{
      this.toaster.error('somthing went wrong','',{progressBar:true})
    })
    
  }
  

}
