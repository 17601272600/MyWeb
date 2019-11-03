import { Component, } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'hero-message',
  template:`
  <div *ngIf="messageService.messages.length">

  <h2>Messages</h2>
  <button class="clear"
          (click)="messageService.clear()">clear</button>
  <div *ngFor='let message of messageService.messages'> {{message}} </div>

</div>
`
})
export class MessageComponent {
  
  constructor(private messageService: MessageService) {
  }
 


}
