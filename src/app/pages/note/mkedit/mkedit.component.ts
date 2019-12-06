import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mkedit',
  templateUrl: './mkedit.component.html',
  styleUrls: ['./mkedit.component.less']
})
export class MkeditComponent implements OnInit {

  @Input()text:any=''; 
  constructor() { }

  ngOnInit() {
  }

}
