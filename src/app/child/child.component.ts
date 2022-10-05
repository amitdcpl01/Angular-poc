import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() item=0 ;
  @Input() item2=0 ;
  @Output() updateDataEvent= new EventEmitter<string>();
  ngOnInit(): void {
  }

}
