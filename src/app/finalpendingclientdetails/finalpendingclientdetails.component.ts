import { Component, OnInit } from '@angular/core';
import{PersonalDetails} from '../models/personaldetail';
import { DataService } from '../services/dataservice';
import { ApplicationService } from '../services/applicationservice';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-finalpendingclientdetails',
  templateUrl: './finalpendingclientdetails.component.html',
  styleUrls: ['./finalpendingclientdetails.component.css']
})
export class FinalpendingclientdetailsComponent implements OnInit {
  finalDetails : PersonalDetails;
  id : number;
  loanStartDate=new Date();
  result;
  constructor(private dataSer:DataService,private applicationService : ApplicationService,private datePipe: DatePipe) { 
    this.finalDetails = new PersonalDetails();
  }

  ngOnInit(): void {
    this.finalDetails = this.dataSer.getDetailsFromPending();
  }
  reject()
  {
    this.id = this.finalDetails.user_id;
    console.log(this.id);
    this.applicationService.rejectLoan(this.finalDetails).subscribe((data)=>{
     this.result=data;
    })
  }
  approve(){
    this.id=this.finalDetails.user_id;
    this.applicationService.approveLoan(this.finalDetails).subscribe((data)=>{this.result=data;
     
    })
  }
}
