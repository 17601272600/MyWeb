import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html'
})
export class ContentsComponent {
  value:string;
  value1:string;
  value2:string;
  constructor() { }
  alert(){
    if(this.value1){
      this.value1=parseFloat(this.value1)+1+"";
    }else{
      this.value1="1";
    }
    alert(this.value1);
  }


}
