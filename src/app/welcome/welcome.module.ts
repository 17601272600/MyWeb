import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IconsProviderModule } from 'src/app/icons-provider.module';

@NgModule({
  imports: [WelcomeRoutingModule,NgZorroAntdModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
