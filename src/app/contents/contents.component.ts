import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   // images = ["assets/端木蓉1.jpg","assets/石兰2.jpg","assets/狂三3.jpg"];//轮播图片
   isCollapsed = false;
   //菜单是否收缩
   toggleCollapsed(): void {
     this.isCollapsed = !this.isCollapsed;
   }

}
