import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/service/user/user-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  contactform!:FormGroup 
  submitform = false;
  constructor(private serive:UserServiceService ,private formBuilder:FormBuilder,private taoster:ToastrService){}
  ngOnInit(): void {
     this.contactform=this.formBuilder.group({
    name: ['', [Validators.required,this.noLeadingWhitespaceValidator]],
    email:['', [Validators.required, Validators.email]],
    phone:['',[Validators.required,this.noLeadingWhitespaceValidator]],
    message:['',[Validators.required,this.noLeadingWhitespaceValidator]]
  })
  
  }
 
  noLeadingWhitespaceValidator(control: any) {
    const inputValue = control.value;
    if (inputValue.trimStart() !== inputValue) {
      return { leadingWhitespace: true };
    }

    return null;
  }

  submit(){
    let data=this.contactform?.getRawValue()
    
    if(!this.contactform.valid){
      this.submitform=true
      this.taoster.error('Please fill the filed','',{progressBar:true})
      
    }else{
      this.serive.contactsubmit(data).subscribe(()=>{
        this.ngOnInit()
        this.taoster.success('Response submitted','',{progressBar:true})
      })
    }
  }

}


