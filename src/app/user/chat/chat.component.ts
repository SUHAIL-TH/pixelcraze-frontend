import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user/user-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent  implements OnInit{
  userdata:any
  chatshow:boolean=false
  constructor(private http:HttpClient,private userservice:UserServiceService){}
  ngOnInit(): void {
    this.getchatslist()
    
  }
  getchatslist(){
    this.userservice.userchatlist().subscribe((res)=>{
        this.userdata=res
        console.log(res)

    })
  }
  fullchat(id:string){
    console.log("hii suhai th thta "+id);
    this.chatshow=true
  }
  

}
