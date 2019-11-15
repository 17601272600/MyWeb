import { Component } from '@angular/core';

@Component({
  styleUrls:['welcome.component.css'],
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent  {
  isCollapsed = false;
  constructor() { }

}
