import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/service/user/user-service.service';

declare const Razorpay: any;

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {
  bookingform!: FormGroup;
  submitform = false;
  professionalId!:string

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toaster: ToastrService,
    private userservice:UserServiceService,
    private activateroutes:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateroutes.queryParams.subscribe(params => {
      this.professionalId= JSON.parse(params['data']);
   
    });
    this.bookingform = this.formBuilder.group({
      name: ['', [Validators.required,this.noLeadingWhitespaceValidator]],
      housename: ['',[Validators.required,this.noLeadingWhitespaceValidator]],
      phone: ['', [Validators.required,Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]],
      place: ['', [Validators.required,this.noLeadingWhitespaceValidator]],
      date: ['', [Validators.required, this.notPastOrCurrentDateValidator]],
      event: ['', [Validators.required,this.noLeadingWhitespaceValidator]],
      amount: ['', [Validators.required,this.noLeadingWhitespaceValidator]]
    });
  }

  notPastOrCurrentDateValidator(control: any) {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate <= today) {
      return { pastOrCurrentDate: true };
    }

    return null;
  }
  noLeadingWhitespaceValidator(control: any) {
    const inputValue = control.value;
    if (inputValue.trimStart() !== inputValue) {
      return { leadingWhitespace: true };
    }

    return null;
  }

  submit() {
    let datas= this.bookingform.getRawValue();
  
    if (
      datas.name === '' ||
      datas.housename === '' ||
      datas.event === '' ||
      datas.phone === '' ||
      datas.place === ''||datas.date==''
    ) {
      this.submitform = true;
      this.toaster.error('Please fill the fields', '', { progressBar: true });
    } else {
   
    
      
      // formdata.append('proff_id',id)
      const options = {
        key: 'rzp_test_JDlClODKCsuMM1',
        amount: datas.amount*100,
        currency: 'INR',
        name: 'Pixel-Craze',
        description: 'Registration Fee',
        image:'https://t3.ftcdn.net/jpg/05/00/09/00/360_F_500090048_Vwr47TpMANq2xG8YHmOo4mFtw0PPkXAt.jpg', // URL of your logo image
        handler: (response: any) => {
          // Handle payment response here
          if (response.razorpay_payment_id) {
            datas.paymentid=response.razorpay_payment_id
            datas.professional=this.professionalId
            
           
           
            this.userservice.booking(datas).subscribe(()=>{
              this.toaster.success('Registered Successfully','',{progressBar:true})
              this.router.navigate(['/bookings'])
            })

          } else {
            this.router.navigate(['/bookingform'])
            this.toaster.error('Somthing went Wrong','Error',{progressBar:true})
            // Payment failed or canceled
            console.log("payment has failed")
          }
        },
        prefill: {
          name: '',
          email: '', // Prefill customer email (optional)
          contact: ''
        }
      };

      const razorpayInstance = new Razorpay(options);
      razorpayInstance.open();
    }
  }
}
