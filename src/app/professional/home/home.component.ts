import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environments';
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
    return `${environment.api}/public/images/${image}`;
   
    
  }

}
