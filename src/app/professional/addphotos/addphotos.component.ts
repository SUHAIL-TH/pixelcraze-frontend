import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfessionalService } from 'src/app/service/professional/professional.service';

@Component({
  selector: 'app-addphotos',
  templateUrl: './addphotos.component.html',
  styleUrls: ['./addphotos.component.css']
})
export class AddphotosComponent  implements OnInit{
  imageForm!: FormGroup;
  imageUrl!: string 
  imageSelected:any|undefined
  constructor(private formBuilder: FormBuilder,private service:ProfessionalService,private toaster:ToastrService,private router:Router){}
  ngOnInit(): void {
    this.imageForm = this.formBuilder.group({
      image: ['',Validators.required],
      discription:['',Validators.required]
    });
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageForm.patchValue({
        image: file
      });
      this.imageSelected=file

      // Display the selected image
      this.displayImage();
    }
  }

  displayImage() {
    const file = this.imageForm.get('image')?.value;
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  submit(){
    let data=this.imageForm.getRawValue()
  

    if(data.discription==''){

    }else{
      const formData = new FormData();
      formData.append('uploadimage',this.imageSelected,this.imageSelected.name)
      formData.append('discription',data.discription)
      this.service.addphoto(formData).subscribe(()=>{
        this.toaster.success('Success','',{progressBar:true})
        this.router.navigate(['/professional/profile'])

      },(err)=>{
        this.toaster.error(err.error.message,'',{progressBar:true})
      })
      console.log(data)
      console.log(this.imageSelected)

    }
 
    

  }

}
