import { Component } from '@angular/core';
import { Input,Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'product-alerts',
  template:`
       <p *ngIf="product.price > 700">
          <button (click)="notify.emit()">Notify Me</button>
      </p>
  `
})
export class ProductAlertsComponent {
  @Input() product;
  @Output() notify = new EventEmitter();
}