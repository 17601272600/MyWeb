import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http"; 


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public http:HttpClient) { } 
  checkLogin(user: object) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form' })
      };
      var url = "http://127.0.0.1:8003/checkLogin";
      this.http.post(url,user,httpOptions).subscribe(response => { 
        console.log(response);
      });
  }

}
