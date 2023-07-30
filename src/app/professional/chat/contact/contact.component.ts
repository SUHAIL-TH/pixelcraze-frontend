import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from 'src/app/service/professional/professional.service';
import { ChatComponent } from '../chat.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  professionalchatdata:any
  constructor(private professionalservie:ProfessionalService,private chatcomponet:ChatComponent){}
  ngOnInit(): void {
   this.getchatlist()
  }
  getchatlist(){
    this.professionalservie.professionalchatlist().subscribe((res)=>{
      this.professionalchatdata=res      
    })
  }
  fullchat(id:string){
    this.chatcomponet.fullchat(id)
  }

}
