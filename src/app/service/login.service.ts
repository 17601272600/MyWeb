import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
  newUser(user: object) {
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form' })
        };
        var url = "/portal/user/newAccount";
        this.http.post(url,user,httpOptions).subscribe(response => { 
          console.log(response);
        });
    }
}
