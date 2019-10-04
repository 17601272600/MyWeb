import { Component, OnInit } from '@angular/core';
import { AppRouteModule } from '../app-route.module';
import { LoginService } from './login.service';
import { HttpClient } from 'selenium-webdriver/http';

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
