import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadprofessional } from '../state/userstate/userstate.action';
import { selectProfessionallist, selectProfessionallistState, selectProfessionallistloaded, selectProfessionallistloading } from '../state/userstate/userstate.selector';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environments';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent  implements OnInit{
  searchText!: string;
  page:number=1
  count:number=0
  tableSize:number=5;
  tableSizes:any=[5,10,15,20]
  constructor(private store:Store,private router:Router){}
  // professionallist$=this.store.select(selectProfessionallist)
  professionallist$:any|null
  loaded$=this.store.select(selectProfessionallistloaded)
  loading$=this.store.select(selectProfessionallistloading)
 
  ngOnInit(): void {
   this.store.dispatch(loadprofessional())
   this.profesionallist()
  
  }
  getImageUrl(image: string): string {
    return `${environment.api}/public/images/${image}`;
   
    
  }
  profesionallist(){
    this.store.pipe(select(selectProfessionallist)).subscribe((professional:any)=>{
      this.professionallist$=professional
      
      
    })
  }
  onTableDataChange(event:any){
    this.page=event
    this.profesionallist()
  }
  onTableSizeChange(event:any){
    this.tableSize=event.target.value;
    this.page=1
    this.profesionallist()
  }
  getprofile(id:any){
   
    this.router.navigate(['/professionalprofile',id])
  }

}
