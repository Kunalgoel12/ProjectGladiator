import { Component, OnInit } from '@angular/core';
import{RegisterModel} from '../models/registerdetail';
import{ApplicationService} from '../services/applicationservice';
import { importType } from '@angular/compiler/src/output/output_ast';
import{Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
register:RegisterModel;
result;
wrongemail:boolean;
gotologin:boolean;
value:Number;
error:number;
  constructor(private service:ApplicationService,private routs:Router) {
this.register=new RegisterModel();
this.gotologin=false;
this.wrongemail=false;

   }

  ngOnInit(): void {
  }
  submit()
  {
    if(this.register.Firstname!=null&&this.register.LastName!=null&&this.register.EmailId!=null&&this.register.DOB!=null
      &&this.register.Mobile!=null&&this.register.pass!=null &&this.register.security_Que!=null)
    {
      
      this.error=200;
    this.service.PostUser(this.register).subscribe((data)=>{this.result=data;this.value=this.result})
    
    if(this.value==200)
    {
      this.gotologin=true;
      this.wrongemail=false;
    }
    else{
      
      this.wrongemail=true;
    }
  }
   else{
     this.error=400;
   
    }
   

  }

}
