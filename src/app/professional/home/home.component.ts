import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bannerdata:any
  ngOnInit(): void {
    this.bannerlist()
  }
  constructor(private service:UserServiceService){}
  bannerlist(){
    this.service.getbanner().subscribe((res)=>{
      this.bannerdata=res
     
    })
  }
  getImageUrl(image: string): string {
    return `http://localhost:3000/public/images/${image}`;
   
    
  }

}
