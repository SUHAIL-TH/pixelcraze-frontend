import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadprofessional } from '../state/userstate/userstate.action';
import { selectProfessionallist, selectProfessionallistState, selectProfessionallistloaded, selectProfessionallistloading } from '../state/userstate/userstate.selector';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent  implements OnInit{
  constructor(private store:Store){}
  // professionallist$=this.store.select(selectProfessionallist)
  professionallist$:any|null
  loaded$=this.store.select(selectProfessionallistloaded)
  loading$=this.store.select(selectProfessionallistloading)
 
  ngOnInit(): void {
   this.store.dispatch(loadprofessional())
   this.profesionallist()
  
  }
  getImageUrl(image: string): string {
    return `http://localhost:3000/public/images/${image}`;
   
    
  }
  profesionallist(){
    this.store.pipe(select(selectProfessionallist)).subscribe((professional:any)=>{
      this.professionallist$=professional
      console.log(professional);
      
    })
  }

}
