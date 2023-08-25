import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProfessionalService } from 'src/app/service/professional/professional.service';
import { Socket } from "ngx-socket-io";
import { ToastrService } from 'ngx-toastr';
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
  professionalchatdata:any
  constructor(private professional: ProfessionalService,private socket:Socket,private toaster:ToastrService) {}
  ngOnInit(): void {
    this.getchatlist()
    this.socket.on('message recieved',(newMessage:any)=>{      
      if (this.userid==newMessage.from) {
        this.messages.push(newMessage);

      }
    })
  }

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
  getchatlist(){
    this.professional.professionalchatlist().subscribe((res:any)=>{
    
      this.professionalchatdata=res.data 
      this.socket.emit('setup',res.id) 
    })
  }

  fullchat(userid: string) {
    this.userid = userid;
    this.professional.chatblock(userid).subscribe((res: any) => {
      this.socket.emit('join',res.cid) 
      this.chatshow = true;
      this.messages = res.result;
      this.connectionId = res.cid;
      this.professionalId=res.prof

    });
  }
  submit(){

    if(this.message.trim()==''){
      
      this.toaster.error("Message field cannot be empty","",{progressBar:true})
    }else{

      const data={
        connectionid:this.connectionId,
        from:this.professionalId,
        to:this.userid,
        message:this.message
      }
      this.professional.sentmessage(data).subscribe((res)=>{
        this.message=''
        this.messages.push(res);
        this.socket.emit('chatMessage',res)
        
      })
    }
  }
}
