import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ProfessionalService } from 'src/app/service/professional/professional.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileData: any;
  selectedImage: any;
  isInputFocused=false;
  constructor(
    private service: ProfessionalService,
    private http: HttpClient,
    private router: Router,
    private taoster:ToastrService
  ) {}
  ngOnInit(): void {
    this.loadprofile();
  }
  loadprofile() {
    this.service.getprofiledata().subscribe((res: any) => {
      this.profileData = res;
    });
  }
  getImageUrl(image: string) {
    if(image){
      return this.service.loadimage(image);
    }else {
      return null
    }
  }
  uploadImage(files: any) {
    this.selectedImage = <File>files.files[0];
    this.isInputFocused=true
  }
  onsubmit(id: string) {
    const formData = new FormData();
    this.isInputFocused=false
    formData.append('profile',this.selectedImage,this.selectedImage.name)
    formData.append('ID',id)
    this.service.changeprofile(formData).subscribe(()=>{
      this.taoster.success('profile picture updated','',{progressBar:true})
      this.ngOnInit()
    },(err)=>{

    })
  }
}
