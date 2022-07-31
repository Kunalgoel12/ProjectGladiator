import { Component, OnInit } from '@angular/core';
import{PersonalDetails} from '../models/personaldetail';
import { DataService } from '../services/dataservice';
import { Router } from '@angular/router';
import { ApplicationService } from '../services/applicationservice';
@Component({
  selector: 'app-rejectedapplication',
  templateUrl: './rejectedapplication.component.html',
  styleUrls: ['./rejectedapplication.component.css']
})
export class RejectedapplicationComponent implements OnInit {
  Personal : PersonalDetails;
  clients
  constructor(private dataSer:DataService,private route:Router,private applicationService:ApplicationService) { 
    this.Personal=new PersonalDetails();
  }

  ngOnInit(): void {
    this.applicationService.getRejectedClients().subscribe((data)=>{
      this.clients=data;
    });
  }
  details(objFromView : PersonalDetails){
    this.Personal = objFromView;
    this.dataSer.setDetailsFromRejected(this.Personal);
    this.route.navigate(['/finalrejecteddetails']);
  }
}
