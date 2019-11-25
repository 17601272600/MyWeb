import { Component, OnInit, Input } from '@angular/core';
import { MenusService } from './menus.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  @Input() isCollapsed;
  triggerTemplate = null;
  menus;
  constructor(
    private menu: MenusService
  ) { }

  ngOnInit() {
    this.menus = this.menu.menus();
  }

}
