import { Component, OnInit } from '@angular/core';
import{PersonalDetails} from '../models/personaldetail'
import { Router } from '@angular/router';
import { DataService } from '../services/dataservice';
import { ApplicationService } from '../services/applicationservice';
@Component({
  selector: 'app-showclients',
  templateUrl: './showclients.component.html',
  styleUrls: ['./showclients.component.css']
})
export class ShowclientsComponent implements OnInit {
  Personal : PersonalDetails;
  clients
  constructor(private route:Router,private dataSer:DataService,private applicationService:ApplicationService ) {
  
   }

  ngOnInit(): void {
    this.applicationService.getClients().subscribe(data=>{
      this.clients=data;
    })
  }
  details(objFromView : PersonalDetails){
    this.Personal = objFromView;
    this.dataSer.setDetailsFromClients(this.Personal);
    this.route.navigate(['/finaldetails']);
  }
}
