import { Component, OnInit } from '@angular/core';
import{PersonalDetails} from '../models/personaldetail'
import { DataService } from '../services/dataservice';
import { ApplicationService } from '../services/applicationservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-termsandcondition',
  templateUrl: './termsandcondition.component.html',
  styleUrls: ['./termsandcondition.component.css']
})
export class TermsandconditionComponent implements OnInit {
  personaldetailfromdataservice:PersonalDetails;
  result;
  click:boolean;
  constructor(private dataservice:DataService,private applicationservice:ApplicationService,private routs:Router) { 
    this.personaldetailfromdataservice=new PersonalDetails();
  this.click=false;
  }

  ngOnInit(): void {
  }
submit()
{
  this.click=!this.click;
  if(!this.click)
  {
  this.personaldetailfromdataservice=this.dataservice.get_pdetail();
   this.applicationservice.PostApplicationForm(this.personaldetailfromdataservice).subscribe((data)=>this.result=data);
console.log(this.result);
this.routs.navigate(['/finalpage'])
  }
}
}
