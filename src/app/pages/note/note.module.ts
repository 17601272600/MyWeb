import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsmindComponent } from './jsmind/jsmind.component';
import { RouterModule, Routes } from '@angular/router';
import { NzDropDownModule, NzModalModule } from 'ng-zorro-antd';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { MkeditModule } from './mkedit/mkedit.module';
  const routes: Routes = [
    { path: '', redirectTo: 'jsmind', pathMatch: 'full' },
    { path: 'jsmind', component: JsmindComponent }
  ];
@NgModule({
  declarations: [JsmindComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),NzDropDownModule,NzModalModule,NzFormModule,NzInputModule,FormsModule,MkeditModule
  ]
})
export class NoteModule { }
