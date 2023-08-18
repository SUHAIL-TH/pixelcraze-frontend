import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/service/user/user-service.service';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {
  
  reviewform!:FormGroup
  profesionalid!:string
  submitform:boolean=false
  rating: number = 0;
  constructor(private service:UserServiceService,private toaster:ToastrService,private router:Router,private activateroutes:ActivatedRoute,private frombuilder:FormBuilder){}
  ngOnInit(): void {
    this.activateroutes.queryParams.subscribe(params => {
      this.profesionalid= JSON.parse(params['proid']);
    });
  

   

    this.reviewform=this.frombuilder.group({
      review:["",[Validators.required,this.noLeadingWhitespaceValidator]],  
    })

  }
  

  setRating(rating: number) {
    this.rating = rating;
    // You can also perform additional actions here when a star is clicked, such as submitting the rating via a service.
  }

  noLeadingWhitespaceValidator(control: any) {
    const inputValue = control.value;
    if (inputValue.trimStart() !== inputValue) {
      return { leadingWhitespace: true };
    }
    return null;
  }
  submit(){
    const data=this.reviewform.getRawValue()

    data.profid=this.profesionalid 
    data.rating=this.rating
    data.time=new Date()
    if(data.review==''){
      this.toaster.error('Please fill the field','',{progressBar:true})
      this.submitform=true
    }else{
      this.service.addreview(data).subscribe(()=>{
        this.toaster.success('Review added Successfully','',{progressBar:true})
        this.router.navigate(['/bookings'])
      })

    }
   
   
  }

}

