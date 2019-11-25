import { Component } from '@angular/core';

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
}
