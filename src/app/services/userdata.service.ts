import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  
  // url = 'https://jsonplaceholder.typicode.com/users';
  // constructor(private http: HttpClient) {
  //   users(){
  //     return this.http.get(this.url);
  //   }

  // }

  users(){
    return[
      { name:'Anil', email:'anil@text.com', phone:'1111'},
    { name:'sumit', email:'anil@text.com', phone:'1111'},
    { name:'sony', email:'anil@text.com', phone:'1111'},
    { name:'lucy', email:'anil@text.com', phone:'1111'}
    ]
  }
}
// function myusers() {
//   throw new Error('Function not implemented.');
// }

