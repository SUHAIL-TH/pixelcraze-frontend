import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from 'src/app/service/user/user-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent  implements OnInit{
  userdata:any
  viewerid:string=''
  chatshow:boolean=false
  messages:any=[]
  message:string=''
  connectionId:string=''
  userid:string=''
  constructor(private http:HttpClient,private userservice:UserServiceService){}
  ngOnInit(): void {
    this.getchatslist()
    
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
    this.userservice.userchatlist().subscribe((res)=>{
        this.userdata=res
       
        
    })
  }
  fullchat(professionalid:string){
   this.viewerid=professionalid
    this.chatshow=true
    this.userservice.chatblock(professionalid).subscribe((res:any)=>{
      this.messages=res.result
      // console.log(res);
      
      this.connectionId=res.cid
      this.userid=res.userid
      // console.log(this.messages)
    })
   }

   submit(){
   
    const data={
      
      connectionid:this.connectionId,
      from:this.userid,
      to:this.viewerid,
      message:this.message,
      
    }
    this.userservice.sentmessage(data).subscribe(()=>{
      this.message=''
      
    })
   }
  

}
