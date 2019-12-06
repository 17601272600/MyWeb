import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getCode(params: any) {
    return this.http.get(environment.urlPrefix+'/portal/user/getCode', {params});
    
  }
  
  constructor(public http:HttpClient) { }
  login(params): Observable<any> {
    return this.http.get(environment.urlPrefix+'/portal/user/newAccount', {params});
  }
}
