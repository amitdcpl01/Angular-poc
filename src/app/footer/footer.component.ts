import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../services/userdata.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  users:any;
  constructor(private usersData:UserdataService){
    console.warn(usersData.users());
    this.users = usersData.users();
  }

  ngOnInit(): void {
  }

}
