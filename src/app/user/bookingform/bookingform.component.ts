import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare const Razorpay: any;

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {
  bookingform!: FormGroup;
  submitform = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.bookingform = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      housename: ['', Validators.required],
      phone: ['', Validators.required],
      place: ['', Validators.required],
      date: ['', [Validators.required, this.notPastOrCurrentDateValidator]],
      event: ['', Validators.required]
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

  submit() {
    let data = this.bookingform.getRawValue();
    if (
      data.name === '' ||
      data.housename === '' ||
      data.event === '' ||
      data.phone === '' ||
      data.place === ''
    ) {
      this.submitform = true;
      this.toaster.error('', '', { progressBar: true });
    } else {
      const options = {
        key: 'rzp_test_JDlClODKCsuMM1',
        amount: 100*100,
        currency: 'INR',
        name: 'Pixel-Craze',
        description: 'Registration Fee',
        image:
          'https://example.com/your_logo', // URL of your logo image
        handler: (response: any) => {
          // Handle payment response here
          console.log(response);
          if (response.razorpay_payment_id) {
            console.log(response.razorpay_payment_id)
          } else {
            // Payment failed or canceled
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
