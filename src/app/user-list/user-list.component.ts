import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  styles:[
    `.custom{
      color:red
    }`
  ],
  template: `<p>text from from template</p>`
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
