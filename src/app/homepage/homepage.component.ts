import { Component, OnInit,Input } from '@angular/core';
import{Router} from '@angular/router';
import { DataService } from '../services/dataservice';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
login:number;

  constructor(private routs:Router,private dataservice:DataService) { 
  
  }

  ngOnInit(): void {
    this.login=this.dataservice.get_logindetail();
    
  }
 
  xyz()
  {
    this.routs.navigate(['/login']);
  }
  pqr()
  {
    this.routs.navigate(['/adminlogin']);
  }
  emiCalculate()
  {
    this.routs.navigate(['/emi']);
  }
  geteligiblity()
  {
     this.routs.navigate(['/geteligiblity']);
  }


}
