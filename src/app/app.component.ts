import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import {UserdataService} from './services/userdata.service'

interface dataType {
  name:string,
  id:number,
  indian:boolean;
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Angular-POC';
  users:any;
  // myusers: any;
  constructor(private usersData:UserdataService){
    // console.warn(usersData.users());
    // this.users = usersData.users();
    this.usersData.user2().subscribe((data: any)=>{
      this.users = data;
    })
  }

  getMyData(){
    const data:dataType={
      name:'amit',
      id:10,
      indian: true
    }
  }

  getUserFormData(data: any){
    console.warn(data);
    this.usersData.saveUser(data).subscribe((res: any)=>{
      console.warn(res);
    })
  }

  // constructor(private usersData:UserdataService){
  //   this.usersData.users().subscribe((data: any)=>{
  //     // console.warn('data', data);
  //     this.users = data;
  //   });
  // }
  
loginForm = new FormGroup({
  user: new FormControl('', [Validators.required]),
  password: new FormControl(''),
})

get user(){
  return this.loginForm.get('user');
}

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
  users2= [
    { name:'Anil', email:'anil@text.com', phone:'1111', accounts: ['yahoo', 'facebook']},
    { name:'sumit', email:'anil@text.com', phone:'1111', accounts: ['yahoo', 'facebook']},
    { name:'sony', email:'anil@text.com', phone:'1111', accounts: ['yahoo', 'facebook']},
    { name:'lucy', email:'anil@text.com', phone:'1111', accounts: ['yahoo', 'facebook']}
  ];

  onLogoClicked(){
    alert('Hello world');
  }

  getVal1(val: string){
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

  list:any[]=[];
  addTask(item:string){
    this.list.push({id:this.list.length, name: item});
    console.warn(this.list);
  }
  removeTask(id:number){
    console.log(id);
    this.list = this.list.filter(item => item.id !== id);
  }
  // data= 8;
  updateData(){
    this.data = Math.random();
  }

  childdata='x';
  updateDataFromChild(item:string){
    console.warn(item);
    this.childdata= item;
  }

  data:any;

  getVal(val: string){
    console.warn(val);
    this.displayVal = val;
  }

  loginUser(val: any){

    console.warn(val);
  }

  memberData= [
    { name:'Anil', email:'anil@text.com', phone:'1111'},
    { name:'sumit', email:'anil@text.com', phone:'1111'},
    { name:'sony', email:'anil@text.com', phone:'1111'},
    { name:'lucy', email:'anil@text.com', phone:'1111'}
  ];
}
