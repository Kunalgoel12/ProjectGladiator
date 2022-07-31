import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/applicationservice';
import{Router} from '@angular/router';
import{Login} from '../models/login';
import { DataService } from '../services/dataservice';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
log:Login;
result
userid:any;
logedin:boolean;
wronguser:Boolean;
PersonalDetailFromDataBase;
value:number;
logd:number;

  constructor(private service:ApplicationService,private routs:Router,private dataservice:DataService) { 
    this.log=new Login();
    this.logedin=true;
 
  }

  ngOnInit(): void {
    
  }
login()
{
 
this.service.login(this.log).subscribe(data=>{this.result=data;this.dataservice.setuserid(this.result);this.value=this.result;if(this.value!=0)
{
    
 this.routs.navigate(['/userdashboard'])
}
 })

}
}
