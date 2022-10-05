import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-poc';
  displayVal: string = '';
  show= true;
  color = "green";
  users1= ['amit', 'sumit', 'sony', 'lucy', 'sam'];
  userDetails= [
    { name:'Anil', email:'anil@text.com', phone:'1111'},
    { name:'sumit', email:'anil@text.com', phone:'1111'},
    { name:'sony', email:'anil@text.com', phone:'1111'},
    { name:'lucy', email:'anil@text.com', phone:'1111'}
  ];

  users= [
    { name:'Anil', email:'anil@text.com', phone:'1111', accounts: ['yahoo', 'facebook']},
    { name:'sumit', email:'anil@text.com', phone:'1111', accounts: ['yahoo', 'facebook']},
    { name:'sony', email:'anil@text.com', phone:'1111', accounts: ['yahoo', 'facebook']},
    { name:'lucy', email:'anil@text.com', phone:'1111', accounts: ['yahoo', 'facebook']}
  ];

  onLogoClicked(){
    alert('Hello world');
  }

  getVal(val: string){
    console.log(val);
    this.displayVal = val;
  }

  getName(name: string | Number){
    alert(name)
  }

  onKeyUp(newTitle:string){
      this.title = newTitle;
  }

  getData(val: string){
    console.log(val);
  }

  userData: any= {}
  getFormData(data:NgForm){
    console.warn(data)
    this.userData= data;
  }
}
