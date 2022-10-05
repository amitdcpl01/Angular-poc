import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-poc';

  onLogoClicked(){
    alert('Hello world');
  }

  getVal(){
    return "hello Amit";
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
}
