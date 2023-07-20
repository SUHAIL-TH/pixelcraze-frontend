import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBannerLoaded, selectBannerLoading, selectBanners,  } from '../state/user/user.selector';
import { loadbanner } from '../state/user/user.action';



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  constructor(private store:Store){}
   banners$=this.store.select(selectBanners)  //this way also can be used to display data in html here we want to use the async key word
   loaded$=this.store.select(selectBannerLoaded)
   loading$=this.store.select(selectBannerLoading)
  ngOnInit(): void {
    this.store.dispatch(loadbanner())
  }
  getImageUrl(image: string): string {
    return `http://localhost:3000/public/images/${image}`;
   
    
  }

}
