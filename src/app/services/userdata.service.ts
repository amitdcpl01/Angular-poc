import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users(){
    return[
      { name:'Anil', email:'anil@text.com', phone:'1111'},
    { name:'sumit', email:'anil@text.com', phone:'1111'},
    { name:'sony', email:'anil@text.com', phone:'1111'},
    { name:'lucy', email:'anil@text.com', phone:'1111'}
    ]
  }
}
