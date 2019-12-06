import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})

export class RegisterComponent implements OnInit {
  regeistForm: any;
  seconds:number=60;
  codeText:string="发送验证码";
  timer;//定时器
  constructor( private fb: FormBuilder,
    private service: LoginService,
    private router: Router,
    private notification: NzNotificationService) {
      
   }

  ngOnInit() {
    this.regeistForm = this.fb.group({
      name: [null, [Validators.required]],
      pwd: [null, [Validators.required]],
      pwd2: [null, [Validators.required, this.confirmationValidator]],
      telephone:[null,[Validators.required]],
      code:[null,[Validators.required]]
    });
  }
  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.regeistForm.controls.pwd2.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.regeistForm.controls.pwd.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  updateCode(){
    this.seconds=this.seconds-1;
    
    if(this.seconds<=0){
      this.codeText="已失效,点击重新发送";
      window.clearInterval(this.timer);//清楚定时器
    }else{
      this.codeText=this.seconds+"秒后失效";
    }

  }
  sendCode(){
    if(this.timer){
      window.clearInterval(this.timer);
      this.timer=null;
    }
    let telephone=this.regeistForm.controls.telephone.value;
    if(!telephone){
      this.notification.warning('联系方式为空',
        '请填写联系方式');
      return;
    }

    let params={telephone:telephone};
    this.service.getCode(params).subscribe(
      data=>{
        this.seconds=60;
        this.timer=setInterval(() => {
       this.updateCode()
        }, 1000);
      },
      error=>{
      }
    );
    
  }

  submitForm(){

  }
}
