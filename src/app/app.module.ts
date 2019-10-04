import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRouteModule } from './app-route.module';
import { LoginService } from './login/login.service';
import { ContentsComponent } from './contents/contents.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,ContentsComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRouteModule,HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
