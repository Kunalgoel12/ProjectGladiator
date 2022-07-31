import { Component, OnInit } from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import{PersonalDetails} from '../models/personaldetail'
import { DataService } from '../services/dataservice';
import { ApplicationService } from '../services/applicationservice';
import{LoanDetail} from '../models/loandetails';
import{VehicleDetails} from '../models/vehicledetail';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import{District} from '../models/district';
import{State} from '../models/state';
import{SelectService} from '../services/selectservice';

@Component({
  selector: 'app-applicationform',
  templateUrl: './applicationform.component.html',
  styleUrls: ['./applicationform.component.css']
})
export class ApplicationformComponent implements OnInit {
 selectservice:SelectService;
  imageUrl1 : string="/assets/images/default.jpg.jpeg";
  imageUrl2 : string="/assets/images/default.jpg.jpeg";
  imageUrl3 : string="/assets/images/default.jpg.jpeg";
  imageUrl4 : string="/assets/images/default.jpg.jpeg";
  uploadPhoto : File=null;
  uploadAadhar : File=null;
  uploadPan : File=null;
  uploadSlips : File=null;
  selectedState:State = new State(29,'Rajasthan');
  details:PersonalDetails;
personaldetailfromdataservice:PersonalDetails;
loandetail:LoanDetail;
vehicaldetail:VehicleDetails;
userid:number;
result;
states: State[];
  districts: District[];
  constructor(private dataservice:DataService,private applicationservice:ApplicationService,private routs:Router) {
    this.details=new PersonalDetails();
    this.personaldetailfromdataservice=new PersonalDetails();
   this.vehicaldetail=new VehicleDetails();
   this.loandetail=new LoanDetail();
  this.userid=this.dataservice.getuserid();
  this.selectservice=new SelectService();
 
}

  ngOnInit(): void {
    this.states = this.selectservice.getState();
    this.onSelect(this.selectedState.id);
  }
  OnSubmit(Photo,Aadhar,Pan,Slips){
     this.userid=this.dataservice.getuserid();
    this.applicationservice.addDocuments(this.userid,this.uploadPhoto,this.uploadAadhar,this.uploadPan,this.uploadSlips).subscribe((data4)=>{
      console.log(data4);
    });
    this.routs.navigate(['/termsncondition']);
  }


  UserDetail(){

    this.dataservice.setp_detail(this.details);
//  this.personaldetailfromdataservice=this.dataservice.get_pdetail();
//  this.applicationservice.PostApplicationForm(this.personaldetailfromdataservice).subscribe((data)=>this.result=data);

  }
  handlePhoto(file:FileList)
  {
    this.uploadPhoto=file.item(0);
    //this.imageUrl="/assets/images/default.jpg";
    var reader = new FileReader();
    reader.onload=(event:any)=>{
      this.imageUrl1=event.target.result;
    }
    reader.readAsDataURL(this.uploadPhoto);
  }
  handleAadhar(file:FileList)
  {
    this.uploadAadhar=file.item(0);
    //this.imageUrl="/assets/images/default.jpg";
    var reader = new FileReader();
    reader.onload=(event:any)=>{
      this.imageUrl2=event.target.result;
    }
    reader.readAsDataURL(this.uploadAadhar);
  }
  handlePan(file:FileList)
  {
    this.uploadPan=file.item(0);
    //this.imageUrl="/assets/images/default.jpg";
    var reader = new FileReader();
    reader.onload=(event:any)=>{
      this.imageUrl3=event.target.result;
    }
    reader.readAsDataURL(this.uploadPan);
  }
  handleSlips(file:FileList)
  {
    this.uploadSlips=file.item(0);
    //this.imageUrl="/assets/images/default.jpg";
    var reader = new FileReader();
    reader.onload=(event:any)=>{
      this.imageUrl4=event.target.result;
    }
    reader.readAsDataURL(this.uploadSlips);
  }
  onSelect(stateid) {
   this.details.res_state=this.states.find(item=>item.id==stateid).name;
    this.districts = this.selectservice.getDistricts().filter((item) => item.stateid == stateid);

  }
  logout()
{
  this.routs.navigate(['/login'])
}
}
