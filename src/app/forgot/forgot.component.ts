import { Component, OnInit } from '@angular/core';
import{Forgot} from '../models/forgot'
import { ApplicationService } from '../services/applicationservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
forgot:Forgot;
result;

  constructor(private application:ApplicationService,private routs:Router) { 
    this.forgot=new Forgot();
  }

  ngOnInit(): void {
  }
change()
{
  this.application.forgot(this.forgot).subscribe(data=>{this.result=data})
}

}
