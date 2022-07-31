import{RegisterModel} from '../models/registerdetail';
import{HttpClient} from '@angular/common/http';
import{Injectable} from '@angular/core'
import{Admin} from '../models/admin';

@Injectable()
export class AdminService{
constructor(private http:HttpClient)
{

}
public adminlogin(adminlogin:Admin)
{
    return this.http.post("http://localhost:53872/api/AdminLogin",adminlogin);
}
}