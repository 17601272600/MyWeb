import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  accountForm: FormGroup;
  isRememberMe: boolean;
  isRegeist = false;//打开注册界面
  isForget = false;//打开忘记界面
  regeistForm: FormGroup;
  submitAccountForm(): void {
    for (const i in this.accountForm.controls) {
      this.accountForm.controls[i].markAsDirty();
      this.accountForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder,private service:LoginService) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      userName: [null, [Validators.required,Validators.pattern]],
      password: [null, [Validators.required]],
      isRememberMe:[true,[]],
    });
    this.regeistForm = this.fb.group({
      telephone: [null],
      pwd: [null],
      code:[null],
      confirm: ['', [this.confirmPasswordValidator]],
    });
  }
  confirmPasswordValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.regeistForm.controls.pwd.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  closePage(){
    this.isRegeist=false;
    this.isForget=false;
    
  }
  submitRegeistForm(value:any){
    let postdata:any={};
    for (const i in this.regeistForm.controls) {
      this.regeistForm.controls[i].markAsDirty();
      this.regeistForm.controls[i].updateValueAndValidity();
      postdata[i]=this.regeistForm.controls[i].value;
    }

    this.service.newUser(postdata);
  }
  sendCode(){
    //alert("send success");
    //this.regeistForm.setValue(code,'123456');
  }
}
