import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfessionalService } from 'src/app/service/professional/professional.service';
import { UserServiceService } from 'src/app/service/user/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerform!:FormGroup 
  regsubmit=false;
  selectedImage:any|File
  selectedImage2:any|File
  constructor(private professionalService:ProfessionalService,
    private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private toastr:ToastrService){}

  ngOnInit(): void {
    
    this.registerform=this.formBuilder.group({
      name:["",Validators.required],
      ownername:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
        phone:["",[Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]],
        password: ["", [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
        fileInput: [null, [Validators.required]],
        fileInputcertificate: [null, [Validators.required]],
        
    })
    

  } 
  uploadImage(files: any) {
    this.selectedImage=<File>files.files[0]
  }
  uploadImage2(files: any) {
    this.selectedImage2=<File>files.files[0]
  }


  
  
 
  onsubmit(){
    
    
    
    let user=this.registerform.getRawValue()
    console.log(user);
    
    
    
    if(user.name==''||user.email==''||user.password==""||user.phone==''||user.nameowner==''){
      this.regsubmit=true
      this.toastr.error('Please fill the fileds' ,'', {
      progressBar: true
    })
    }else {
      const formData = new FormData();
      formData.append('image',this.selectedImage,this.selectedImage.name)
      formData.append('photo',this.selectedImage2,this.selectedImage2.name)
      formData.append('name',user.name)
      formData.append("ownername",user.ownername)
      formData.append("phone",user.phone)
      formData.append("email",user.email)
      formData.append("password",user.password)
      this.professionalService.professionalSignup(formData).subscribe((res:any)=>{this.toastr.success('Registered','Successfully', { progressBar: true });
      // const navigationExtras = {
      //   queryParams: {
      //     data: JSON.stringify(res.data)
      //   }
      // };

      this.router.navigate(['/professional']);},(err)=>{
        this.toastr.error(err.error.message ,'', {
          progressBar: true
        })
      })
    }

    
    
    
    
   
    
  }
  
}
