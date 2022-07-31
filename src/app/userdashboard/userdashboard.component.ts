import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DataService } from '../services/dataservice';
import { ApplicationService } from '../services/applicationservice';
import{PersonalDetails} from '../models/personaldetail'
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
username;
userid:number;
click1:boolean;
click2:boolean;
notapplied:boolean;
detail;
loanammount:string;

  constructor(private routs:Router,private dataservice:DataService,private application:ApplicationService) {
   
   
   }

  ngOnInit(): void {

   
  }
apply()
{
  
  this.routs.navigate(['/geteligiblity']);
}
userdetail()
{ this.click1=!this.click1;
  this.userid=this.dataservice.getuserid();
 this.application.GetApplication(Number(this.userid)).subscribe(data=>{this.username=data;});

}
 applicantdetail()
 {
   this.click2=!this.click2;
   this.userid=this.dataservice.getuserid();
   this.application.GetAllDetail(Number(this.userid)).subscribe(data=>{this.detail=data;});
    
  }
  logout()
  {
    
    this.routs.navigate(['/login'])
  }
}
