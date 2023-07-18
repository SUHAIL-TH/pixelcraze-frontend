import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent  implements OnInit{
  otpform!:FormGroup
  otpsubmit=false
  user:any
  dataphone:any
  showTimer: boolean = false;
  minutes: string = '01';
  seconds: string = '00';
  countdownTimer: any;
  timerclosed=false
  clicked=true
  
  constructor(private toaser:ToastrService,private formBuilder:FormBuilder,private activateroutes:ActivatedRoute,private http:HttpClient,private router:Router){}
  ngOnInit(): void {

    this.activateroutes.queryParams.subscribe(params => {
      this.user= JSON.parse(params['data']);
      // if (dataFromBackend !== undefined) {
      //   try {
      //     this.dataphone = JSON.parse(dataFromBackend);
      //     // Use the parsed data as needed
      //   } catch (error) {
      //     console.log('Error parsing JSON:', error);
      //   }
      // }
    });
    this.otpform=this.formBuilder.group({
      otp:["",[Validators.required,Validators.minLength(6)]],
    
    })
    this.startTimer(60);
   
  } 
  otpValue!: string;


  startTimer(duration: number) {
    this.showTimer = true;
    let timer = duration;

    this.countdownTimer = setInterval(() => {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;

      // Update the timer display.
      this.minutes = minutes.toString().padStart(2, '0');
      this.seconds = seconds.toString().padStart(2, '0');

      // Decrease the timer.
      timer--;

      // Check if the timer has reached 0.
      if (timer < 0) {
        // Clear the interval when the timer reaches 0.
        clearInterval(this.countdownTimer);
        this.showTimer = false;
        this.timerclosed=true
      }
    }, 1000); // Update the timer every second (1000 milliseconds).
  }
  resend(){
    this.clicked=false
    let data=this.user
    this.http.post("http://localhost:3000/resentotp",data,{
      withCredentials:true
    }).subscribe(()=>{
      this.toaser.success('OTP','sent successfully',{progressBar:true})
    },(err)=>{
      this.toaser.error(err.error.message,'',{progressBar:true})
    })
      
    
  }
  submitForm() {
    
    
    let otp=this.otpform.getRawValue()
    this.otpsubmit=true
    otp.phone=this.user
    console.log(otp);
    
    
    if (otp.otp=='') {
      
      this.toaser.error("Please Enter the otp",'',{progressBar:true})
    } else {
      this.http.post("http://localhost:3000/postotp",otp,{
      withCredentials:true
     }).subscribe(()=>{this.toaser.success('Registered',"successfully",{progressBar:true}),this.router.navigate(['/login'])},(err)=>{
      this.toaser.error(err.error.message,'',{progressBar:true})
     })
     
      
    }
  }

}
