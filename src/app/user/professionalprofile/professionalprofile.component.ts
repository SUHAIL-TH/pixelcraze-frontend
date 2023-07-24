import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user/user-service.service';

@Component({
  selector: 'app-professionalprofile',
  templateUrl: './professionalprofile.component.html',
  styleUrls: ['./professionalprofile.component.css'],
})
export class ProfessionalprofileComponent implements OnInit {
  userId: any;
  professionaldata: any;
  constructor(
    private service: UserServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getprofessionalData(this.userId as string);
  }
  getprofessionalData(id: string) {
    this.service.getdetailsprofessional(id).subscribe(
      (res) => {
        this.professionaldata = res;
      },
      (err) => {
        this.router.navigate(['/']);
      }
    );
  }
  getImageUrl(image: string): string {
    return `http://localhost:3000/public/images/${image}`;
   
    
  }
}
