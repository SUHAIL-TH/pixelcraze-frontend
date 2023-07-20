import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/service/admin/admin.service';

@Component({
  selector: 'app-addbanner',
  templateUrl: './addbanner.component.html',
  styleUrls: ['./addbanner.component.css']
})
export class AddbannerComponent implements OnInit {
  bannerform!:FormGroup 
  regsubmit=false;
  selectedImage:any|File
 
  constructor(private adminservice:AdminService,
    private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private toastr:ToastrService){}

  ngOnInit(): void {
    
    this.bannerform=this.formBuilder.group({
      heading:["",Validators.required],
      subheading:["",[Validators.required]],
      fileInput: [null, [Validators.required]]
       
    })
    
    

  } 
  uploadImage(files: any) {
    this.selectedImage=<File>files.files[0]
  }
  // fileTypeValidator(control: AbstractControl): ValidationErrors | null {
  //   const allowedTypes = ['image/jpeg', 'image/png'];
  //   const file = control.value;
  //   if (file) {
  //     const fileType = file.type;
  //     if (!allowedTypes.includes(fileType)) {
  //       return { invalidFileType: true };
  //     }
  //   }
  //   return null;
  // }

  onsubmit(){
    
    
    let data=this.bannerform.getRawValue()
   
   
   
    
    if(data.heading==''){
      this.regsubmit=true;
      this.toastr.error('Please fill the field','',{progressBar:true})
    }else{
      const formData = new FormData();
      console.log(data);
      
      formData.append('image',this.selectedImage,this.selectedImage.name)
      formData.append('heading',data.heading)
      formData.append('subheading',data.subheading)
      console.log(formData);
      this.adminservice.addbanner(formData).subscribe((res)=>{
        this.toastr.success('Banner Added','',{progressBar:true})
        this.router.navigate(['/admin/banner'])
      },(err)=>{
        this.toastr.error(err.error.message,'',{progressBar:true})
      })

    }

  }
  onFileInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files ? inputElement.files[0] : null;
    this.bannerform.patchValue({
      fileInput: file,
    });
  }

}
