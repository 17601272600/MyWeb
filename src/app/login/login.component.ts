import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  
  constructor(public loginservice:LoginService) { }
  user:any={name:"",pwd:""}
  login(user2){
  //  this.loginservice.checkLogin(this.user){
      
   // };
  }
  ngOnInit() {
   
  
  }
  
  


}
