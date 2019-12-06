import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MkeditComponent } from './mkedit.component';



@NgModule({
  declarations: [MkeditComponent],
  imports: [
    CommonModule,
  ],
  exports:[MkeditComponent]
})
export class MkeditModule { }
