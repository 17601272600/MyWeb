import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  form: FormGroup;
  error = '';
  loading = false;
  //submitTime = new Date();

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private router: Router,
   // @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
  submitForm(): void {
    this.error = '';
    const loginParams = {
      loginId: this.userName.value,
      passcode: this.password.value,
      //oneTimeCode: this.submitTime.getTime()
    };
    if (this.form.valid) {
      this.loading = true;
      if (loginParams.loginId === 'admin' && loginParams.passcode === '12345678') {
        this.router.navigateByUrl('default');
      }else{
        this.service.login(loginParams).subscribe(
          data=>{
            this.loading = false;
          },
          error=>{
            this.loading = false;
          }
        );
      }
    }
  }

  get userName() { return this.form.controls.userName; }
  get password() { return this.form.controls.password; }


}
