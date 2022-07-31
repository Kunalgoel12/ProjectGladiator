import { Component, OnInit, LOCALE_ID } from '@angular/core';
import{Eligibilty} from '../models/eligibilityapplicant';
import { DatePipe } from '@angular/common';
import{VehicleDetails} from '../models/vehicledetail';
import{PersonalDetails} from '../models/personaldetail'
import { Route } from '@angular/compiler/src/core';
import{Router} from '@angular/router'
import{DataService} from '../services/dataservice';
import { Brand } from '../models/brand';
import { Model } from '../models/model';
import{ SelectService } from '../services/selectservice';
import{EmploymentDetail} from '../models/employementdetail';
import{LoanDetail} from '../models/loandetails';
@Component({
  selector: 'app-geteligibility',
  templateUrl: './geteligibility.component.html',
  styleUrls: ['./geteligibility.component.css']
})
export class GeteligibilityComponent implements OnInit {
  selectedBrand: Brand=new Brand(1,'Ford');
  brands: Brand[];
  models: Model[];
  employementdetail:EmploymentDetail;
loandetail:LoanDetail;
 

  eligible : Eligibilty;
  vdetails : VehicleDetails;
  maxLoanAmount : string;
  curYear = Number(new Date().getFullYear());
  yearDiff : number;
  enteredyear : number;
  eligibleMsg : string;
  showbutton : boolean;
  eligibleLoanAmt : string;
userid:any;
error:Number;
  

  constructor(private datePipe: DatePipe,private routes:Router,private dataservice:DataService,private selectservice:SelectService) { 
    this.userid=this.dataservice.getuserid();
    this.eligible = new Eligibilty();
    this.vdetails = new VehicleDetails();
    this.employementdetail=new EmploymentDetail();
    this.employementdetail.emp_type = "Self-Employed";
    this.eligible.gender = "Male";
    this.eligibleMsg = "";
    this.showbutton = false;
    this.employementdetail.other_income='0';
    this.brands=[];
    this.models=[];
    
  }

  ngOnInit(): void {
    this.brands = this.selectservice.getBrands();
    this.onSelect(this.selectedBrand.id);
  }
  checkEligibility(){
    this.enteredyear = Number(this.datePipe.transform(this.eligible.dob, 'yyyy'));
    //this.enteredyear = Number(this.eligible.dob.getFullYear());
    this.yearDiff = this.curYear - this.enteredyear;
    // Number(this.details.yearly_salary)*4;

    if(this.yearDiff>=21 && (Number(this.employementdetail.yearly_salary)+Number(this.employementdetail.other_income))>400000)
    {
      this.showbutton=true;
      this.maxLoanAmount = (Number(this.employementdetail.yearly_salary)*4).toString();
      if(Number(this.maxLoanAmount)< Number(this.vdetails.onroad_price))
      {
        this.eligibleLoanAmt = this.maxLoanAmount;
      }
      else
      {
        this.eligibleLoanAmt = (0.9*Number(this.vdetails.onroad_price)).toString();
      }

      this.eligibleMsg = "Congrats ! you are eligible for loan";
    }
    else
    {
      this.eligibleMsg = "Sorry you are not eligible for Loan :( your age should  be greater then 21 and your yearly salary should be greater 4Lac";
    }
   
  }
  proceed()
  {
    if(this.vdetails.Ex_showroom_price!=null&&this.vdetails.car_make!=null&&
      this.vdetails.car_model!=null&&this.vdetails.onroad_price!=null &&this.employementdetail.emp_type!=null&&this.employementdetail.other_income!=null&&this.employementdetail.yearly_salary!=null)
      {
    this.error=200;
    console.log(this.vdetails.car_make)
    this.dataservice.set_empdetails(this.employementdetail);
    this.dataservice.setoption(this.eligibleLoanAmt);
    this.dataservice.set_vehicaldetail(this.vdetails);
    this.routes.navigate(['/loanoffer'])
      }
else{
  this.error=400;
}
}
  onSelect(brandid) {
    this.vdetails.car_make=this.brands.find((c)=>c.id==brandid).name;
    this.models = this.selectservice.getStates().filter((item) => item.brandid == brandid);
  }
logout()
{
  this.routes.navigate(['/login'])
}
}
