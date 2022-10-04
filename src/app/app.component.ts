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

  onKeyUp(newTitle:string){
      this.title = newTitle;
  }
}
