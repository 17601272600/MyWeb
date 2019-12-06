import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N, zh_CN, NZ_NOTIFICATION_CONFIG, NgZorroAntdModule } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgZorroAntdModule
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
    { provide: NZ_NOTIFICATION_CONFIG, useValue: { nzMaxStack: 1 } },
    { provide: NZ_I18N, useValue: zh_CN },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
