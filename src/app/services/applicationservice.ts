import{RegisterModel} from '../models/registerdetail';
import{HttpClient} from '@angular/common/http';
import{Injectable} from '@angular/core'
import{Login} from '../models/login';
import { from } from 'rxjs';
import{PersonalDetails} from '../models/personaldetail';
import{LoanDetail} from '../models/loandetails'
import { importType } from '@angular/compiler/src/output/output_ast';
import{Forgot} from '../models/forgot'
@Injectable()
export class ApplicationService{
constructor(private http:HttpClient,private http1:HttpClient,private http2:HttpClient,private http3:HttpClient,private http4:HttpClient)
{

}
    public PostUser(register:RegisterModel)
    {
        return this.http.post("http://localhost:53872/api/UserRegistration",register);
    }
    public login(login:Login)
    {
        return this.http.post("http://localhost:53872/api/Login",login);
    }
    public PostApplicationForm(personaldetail:PersonalDetails)
    {

        return this.http.post("http://localhost:53872/api/PersonalDetail",personaldetail);
    }
    
public GetApplication(id:number)
{
    return this.http1.get("http://localhost:53872/api/GetData/"+id);
}
public GetAllDetail(id:number)
{
    return this.http2.get("http://localhost:53872/api/GetAllData/"+id);
}
public addDocuments(id:number,uploadPhoto:File,uploadAadhar:File,uploadPan:File,uploadSlips:File)
    {
        const formdata : FormData = new FormData();
        formdata.append('Photo',uploadPhoto,uploadPhoto.name);
        formdata.append('Aadhar',uploadAadhar,uploadAadhar.name);
        formdata.append('Pan',uploadPan,uploadPan.name);
        formdata.append('Slips',uploadSlips,uploadSlips.name);
        return this.http3.post("http://localhost:53872/api/Documents/"+id,formdata);
    }
    public getClients(){
        console.log("hyye");
        return this.http3.get("http://localhost:53872/api/Clients");
   
    }
    public getPendingClients(){
        console.log("get");
        return this.http4.get("http://localhost:53872/api/PendingApplication");
    }
    public getRejectedClients(){
        console.log("get");
        return this.http.get("http://localhost:53872/api/RejectedApplication");
    
    }
    public approveLoan(detail:PersonalDetails){
        return this.http.put("http://localhost:53872/api/ApproveLoan",detail);
    }
    public rejectLoan(detail:PersonalDetails){
        return this.http.put("http://localhost:53872/api/RejectLoan",detail);
    }
    public forgot(forget:Forgot){
        console.log("service");
        return this.http4.put("http://localhost:53872/api/ForgotPassword",forget);
    }
}