import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  
  }

  submit(){

  }

}
