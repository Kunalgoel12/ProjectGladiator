import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin service';
import{Admin} from '../models/admin'
import { Router } from '@angular/router';

@Component({
  selector: 'app-aminlogin',
  templateUrl: './aminlogin.component.html',
  styleUrls: ['./aminlogin.component.css']
})
export class AminloginComponent implements OnInit {
result:any;
admindata:Admin;
  constructor(private adminservice:AdminService,private routs:Router) {
this.admindata=new Admin();

   }

  ngOnInit(): void {
  }
  admin()
  {
this.adminservice.adminlogin(this.admindata).subscribe(data=>{this.result=data;
if(this.result==200)
{
  this.routs.navigate(['/admindash']);

}
});
 
  }

  }
