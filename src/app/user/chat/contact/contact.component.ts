import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user/user-service.service';
import { ChatComponent } from '../../chat/chat.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  userdata: any;
  @Input() data: any;
  constructor(
    private http: HttpClient,
    private userservice: UserServiceService,
    private chatcomponet: ChatComponent
  ) {}
  ngOnInit(): void {
    this.getchatslist();
  }
  getchatslist() {
    this.userservice.userchatlist().subscribe((res: any) => {
      this.userdata = res.data;
    });
  }
  fullchat(id: string) {
    this.chatcomponet.fullchat(id);
  }
}
