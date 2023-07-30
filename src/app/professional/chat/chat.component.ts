import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProfessionalService } from 'src/app/service/professional/professional.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  userid: string = '';
  chatshow: boolean = false;
  messages: any = [];
  message: string = '';
  connectionId: string = '';
  professionalId:string=''
  constructor(private professional: ProfessionalService) {}
  ngOnInit(): void {}
  @ViewChild('chatContainer') chatContainer!: ElementRef 
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }
  private scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {
      // Handle any errors related to scrolling (if necessary)
    }
  }

  fullchat(userid: string) {
    console.log(userid);

    this.userid = userid;

    this.professional.chatblock(userid).subscribe((res: any) => {
      this.chatshow = true;
      this.messages = res.result;
      this.connectionId = res.cid;
      this.professionalId=res.user

    });
  }
  submit(){
  
    const data={
      connectionid:this.connectionId,
      from:this.professionalId,
      to:this.userid,
      message:this.message
    }
    this.professional.sentmessage(data).subscribe(()=>{
      this.message=''
      
    })
  }
}
