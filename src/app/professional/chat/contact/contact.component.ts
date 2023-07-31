import { Component, Input, OnInit } from '@angular/core';
import { ProfessionalService } from 'src/app/service/professional/professional.service';
import { ChatComponent } from '../chat.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() data: any;
  constructor(private professionalservie:ProfessionalService,private chatcomponet:ChatComponent){}
  ngOnInit(): void {
  
  }
 
  fullchat(id:string){
    this.chatcomponet.fullchat(id)
  }

}
