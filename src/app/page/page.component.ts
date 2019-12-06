import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit {
  isCollapsed=false;

  triggerTemplate = null;
  date;
  constructor(
   // private api: ApiService
  ) { }
  launchSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
    const date = new Date();
    this.date = date.getFullYear();
    //this.api.isConsole('NoConsole');
  }
}
