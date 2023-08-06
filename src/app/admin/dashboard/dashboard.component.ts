import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin/admin.service';
import { dashboarddata } from '../state/types/user.type';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chartOptions!: Highcharts.Options;
  dashboarddata!: object;
  usercount!: number;
  bannercount!: number;
  professionalcount!: number;
  professionalnotactive!:number
  bookingcount!: number;
  blockedprofessionals!:number
  Highcharts = Highcharts; // Define Highcharts object here
  pieChart:any
  

  constructor(private adminservice: AdminService) {}

  ngOnInit() {
    this.loaddata();
  }

  loaddata() {
    this.adminservice.getdashboarddata().subscribe(
      (res: any) => {
        console.log(res);
        
        this.usercount = res.usercount;
        this.bannercount = res.bannercount;
        this.professionalcount = res.professionalverifiedcount;
        this.bookingcount = res.bookedcount;
        this.professionalnotactive=res.professionalnotverifiedcount
        this.blockedprofessionals=res.blockedprofessionals

        this.chartOptions = {
          chart: {
            type: 'pie'
          },
          title: {
            text: 'Chart'
          },
          series: [
            {
              type: 'pie',
              name: 'Data',
              data: [
                { name: 'Users', y: this.usercount },
                { name: 'Banners', y: this.bannercount },
                { name: 'Professionals', y: this.professionalcount },
                { name: 'Bookings', y: this.bookingcount }
              ]
            }
          ]
        };
        this.pieChart=new Chart({
          chart:{
            type:'pie',
            plotShadow:false
          },
          credits:{
            enabled:false
          },
          plotOptions:{
            pie:{
              innerSize:'99%',
              borderWidth:20,
              borderColor:'',
              slicedOffset:10,
              dataLabels:{
                connectorWidth:0,
              }
              
            }
          },
          title:{
            verticalAlign:'middle',
            floating:true,
            text:'Professional'
          },
          legend:{
            enabled:true
          },
          series:[
            {
              type:'pie',
              data:[
                {name:'Active professional',y:this.professionalcount,color:'yellow'},
                {name:'not verifeid professional',y:this.professionalnotactive,color:'green'},
                {name:'blocked professional',y:this.blockedprofessionals,color:'grlightblue'},
      
              ]
            }
          ]
      
        })
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
