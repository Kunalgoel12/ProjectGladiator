import { Component, OnInit } from '@angular/core';
import{PersonalDetails} from '../models/personaldetail'
import { ApplicationService } from '../services/applicationservice';
import { Router } from '@angular/router';
import { DataService } from '../services/dataservice';
@Component({
  selector: 'app-pendingapplication',
  templateUrl: './pendingapplication.component.html',
  styleUrls: ['./pendingapplication.component.css']
})
export class PendingapplicationComponent implements OnInit {
  Personal : PersonalDetails;
  clients
  constructor(private applicationService:ApplicationService,private route:Router,private dataSer:DataService) { 
    this.Personal = new PersonalDetails();
  }

  ngOnInit(): void {
    this.applicationService.getPendingClients().subscribe((data)=>{
      this.clients=data;
    })
  }
  details(objectFromView:PersonalDetails){
    this.Personal = objectFromView;
    this.dataSer.setDetailsFromPending(this.Personal);
    this.route.navigate(['/finalpendingdetails']);
  }
}
