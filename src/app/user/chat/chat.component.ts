import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/service/user/user-service.service';
import { Socket } from "ngx-socket-io";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent  implements OnInit{
  userdata:string=''
  viewerid:string=''
  chatshow:boolean=false
  messages:any=[]
  message:string=''
  connectionId:string=''
  userid:string=''

  constructor(private http:HttpClient,private userservice:UserServiceService,private toaster:ToastrService,private socket:Socket){}
  ngOnInit(): void {
    this.getchatslist()

    this.socket.on('message recieved',(newMessage:any)=>{   

      
      if (this.viewerid==newMessage.from) {
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
  getchatslist(){
    this.userservice.userchatlist().subscribe((res:any)=>{
      
        this.userdata=res.data
       this.socket.emit('setup',res.id) 
    })
  }
  fullchat(professionalid:string){
   this.viewerid=professionalid
    this.chatshow=true
    this.userservice.chatblock(professionalid).subscribe((res:any)=>{
      this.socket.emit('join',res.cid) 
      this.messages=res.result
      this.connectionId=res.cid
      this.userid=res.userid
      
    })
   }

   submit(){

    if(this.message==''){
      this.toaster.error("Please type message",'',{progressBar:true})
    }else{
      const data={
      
        connectionid:this.connectionId,
        from:this.userid,
        to:this.viewerid,
        message:this.message,
      }
      this.userservice.sentmessage(data).subscribe((res)=>{
        this.message=''
        this.messages.push(res);
        this.socket.emit('chatMessage',res)
      })
     }

    }
   
    
  

}


