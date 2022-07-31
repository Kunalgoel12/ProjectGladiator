import{ PersonalDetails } from '../models/personaldetail';
import{ EmploymentDetail } from '../models/employementdetail';
import{VehicleDetails} from '../models/vehicledetail';
import{LoanDetail} from '../models/loandetails';
export class DataService{
    maxloanamt:string;
    logdin:number;
    personaldetail:PersonalDetails;
    employmentdetail:EmploymentDetail;
    loandetailfromdataservice:LoanDetail;
  vehicaldetail:VehicleDetails;
  userid:any;
  clientDetailsFromDataService:PersonalDetails;
  pendingObjectFromDataService:PersonalDetails;
  rejectedObjectFromDataService : PersonalDetails;
constructor(){
 this.logdin=0;
    this.personaldetail=new PersonalDetails();
    this.loandetailfromdataservice=new LoanDetail();
    this.employmentdetail=new EmploymentDetail();
this.vehicaldetail=new VehicleDetails();
 this.clientDetailsFromDataService=new PersonalDetails();   
this.pendingObjectFromDataService=new PersonalDetails();
this.rejectedObjectFromDataService = new PersonalDetails();
}
    setoption(value:string)
    {
this.maxloanamt=value;
    }
    getoption()
    {
     return this.maxloanamt;
    }
    set_vehicaldetail(vehicaldetail:VehicleDetails)
    {
        this.vehicaldetail=vehicaldetail;
    }
    setp_detail(personaldetail:PersonalDetails)
{
    this.personaldetail=personaldetail;
    this.personaldetail.emp_type=this.employmentdetail.emp_type;
    this.personaldetail.yearly_salary=this.employmentdetail.yearly_salary;
    this.personaldetail.other_income=this.employmentdetail.other_income;

this.personaldetail.user_id=this.userid;

    this.personaldetail.loan_amt=this.loandetailfromdataservice.loan_amt;
this.personaldetail.loan_emi=this.loandetailfromdataservice.loan_emi;
this.personaldetail.loan_intrest=this.loandetailfromdataservice.loan_intrest;
this.personaldetail.loan_tenure=this.loandetailfromdataservice.loan_tenure;


this.personaldetail.car_make=this.vehicaldetail.car_make;
this.personaldetail.car_model=this.vehicaldetail.car_model;
this.personaldetail.Ex_showroom_price=this.vehicaldetail.Ex_showroom_price;
this.personaldetail.onroad_price=this.vehicaldetail.onroad_price;



}

get_pdetail()
{
    return this.personaldetail;
}
set_empdetails(employmentdetail:EmploymentDetail)
{
this.employmentdetail=employmentdetail;
}

set_loandetail(loandetail:LoanDetail)
{
    this.loandetailfromdataservice=loandetail;
}
set_logdetail(login:number)
{
    this.logdin=login;
}
get_logindetail()
{
    return this.logdin;
}
setuserid(userid:any)
{
    this.userid=userid;
}
getuserid()
{
    return this.userid;
}
setDetailsFromClients(clientObjectFromComponent : PersonalDetails){
    this.clientDetailsFromDataService = clientObjectFromComponent;
}
getDetailsFromClients(){
    console.log("data");
    return this.clientDetailsFromDataService;
}
setDetailsFromPending(pendingObjectFromComponent:PersonalDetails){
   console.log("from data service");
    this.pendingObjectFromDataService = pendingObjectFromComponent;
}
getDetailsFromPending(){
    return this.pendingObjectFromDataService;
}
setDetailsFromRejected(rejectedObjectFromComponent : PersonalDetails){
    this.rejectedObjectFromDataService = rejectedObjectFromComponent;
}
getDetailsFromRejected(){
    return this.rejectedObjectFromDataService;
}
}


