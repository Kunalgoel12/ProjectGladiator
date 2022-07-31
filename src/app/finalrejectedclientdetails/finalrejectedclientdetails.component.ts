import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/dataservice';
import{PersonalDetails} from '../models/personaldetail';
@Component({
  selector: 'app-finalrejectedclientdetails',
  templateUrl: './finalrejectedclientdetails.component.html',
  styleUrls: ['./finalrejectedclientdetails.component.css']
})
export class FinalrejectedclientdetailsComponent implements OnInit {
  finalDetails : PersonalDetails;
  constructor(private dataSer:DataService) { 
    this.finalDetails = new PersonalDetails();
  }

  ngOnInit(): void {
    this.finalDetails = this.dataSer.getDetailsFromRejected();
  }

}
