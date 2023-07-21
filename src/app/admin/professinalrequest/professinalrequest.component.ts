import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadbanner, loadprofessional } from '../state/user/user.action';
import { selectBannerLoaded, selectProfessionalState, selectProfessionals, selectProfessionalsloaded, selectProfessionalsloading } from '../state/user/user.selector';

@Component({
  selector: 'app-professinalrequest',
  templateUrl: './professinalrequest.component.html',
  styleUrls: ['./professinalrequest.component.css']
})
export class ProfessinalrequestComponent implements OnInit {
  
  constructor(private store:Store){}
  professionals$=this.store.select(selectProfessionals)
  loading$=this.store.select(selectProfessionalsloading)
  loaded$=this.store.select(selectProfessionalsloaded)
 
  ngOnInit(): void {
    this.store.dispatch(loadprofessional())
    console.log(this.loaded$);
    
  }
 
}
