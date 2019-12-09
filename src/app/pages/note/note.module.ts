import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsmindComponent } from './jsmind/jsmind.component';
import { RouterModule, Routes } from '@angular/router';
import { NzDropDownModule, NzModalModule } from 'ng-zorro-antd';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NoteComponent } from './note.component';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { MarkdownComponent } from './markdown/markdown.component';
  const routes: Routes = [
    { path: '', component:NoteComponent},
    //{ path: 'jsmind', component: JsmindComponent }
  ];
@NgModule({
  declarations: [JsmindComponent, NoteComponent,MarkdownComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),NzDropDownModule,NzModalModule,NzFormModule,NzInputModule,FormsModule,NzTreeModule
  ]
})
export class NoteModule { }
