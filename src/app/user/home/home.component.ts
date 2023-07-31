import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  bannerdata:any
  constructor(private userservice:UserServiceService){}
  ngOnInit(): void {
    this.bannerlist()
  }
  bannerlist(){
    this.userservice.getbanner().subscribe((res)=>{
      this.bannerdata=res
      console.log(this.bannerdata)
    })
  }
  getImageUrl(image: string): string {
    return `http://localhost:3000/public/images/${image}`;
   
    
  }
    
    
}
