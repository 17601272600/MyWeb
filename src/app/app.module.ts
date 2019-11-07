import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRouteModule } from './app-route.module';
import { LoginService } from './login/login.service';
import { ContentsComponent } from './contents/contents.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,ContentsComponent
  ],
  imports: [
    CommonModule,BrowserModule,FormsModule,AppRouteModule,HttpClientModule, NgZorroAntdModule, BrowserAnimationsModule
  ],
  providers: [LoginService, { provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
