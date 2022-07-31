import { Component, OnInit } from '@angular/core';
import{PersonalDetails} from '../models/personaldetail';
import { DataService } from '../services/dataservice';
@Component({
  selector: 'app-finashowclientdetails',
  templateUrl: './finashowclientdetails.component.html',
  styleUrls: ['./finashowclientdetails.component.css']
})
export class FinashowclientdetailsComponent implements OnInit {
  finalDetails : PersonalDetails;
  constructor(private dataSer:DataService) { 
    this.finalDetails=new PersonalDetails();
  }

  ngOnInit(): void {
    this.finalDetails = this.dataSer.getDetailsFromClients();
  }

}
