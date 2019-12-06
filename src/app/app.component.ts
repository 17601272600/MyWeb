import { Component } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [
    `:host ::ng-deep .ant-layout-sider {
    margin-top: 64px;
    position: fixed;
    height: 100%;
}`]
})
export class AppComponent {
  constructor(private readonly nzConfigService: NzConfigService){
    //设置弹出框
    nzConfigService.set("message",{"nzDuration":1000});
  }
}
