import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { EditorConfig } from './markdown';
declare var editormd: any;
@Component({
  selector: 'mark-down',
  template:`
  <link rel="stylesheet" href="/assets/editor.md/css/editormd.css" />
  <div class="detailmarkdown" id="detailmarkdown">
      <textarea style="display: none;" [(ngModel)]="text"></textarea>
  </div>`,
  styles: []
})
export class MarkdownComponent implements OnInit,OnDestroy{
  ngOnDestroy(): void {
    this.text=this.editor.getMarkdown();
    this.textChange.emit(this.text);
  }
  editor:any;
  conf = new EditorConfig();
  
@Input("text") text:string = '测试语句';
@Output("text") textChange = new EventEmitter();
@Input("height") height:string = '100%';



  ngOnInit() {
    if(!this.text){
      this.text="";
    }
    this.conf.height=this.height;
    this.editor=editormd("detailmarkdown",this.conf);
    this.editor.unwatch();
  }
 
}
