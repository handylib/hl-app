import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hl-app';


  options : any = [
    {
      name : "Iron Man",
      value : "0"
    },
    {
      name : "Winter Soldier",
      value : "1"
    },
    {
      name : "Captain America",
      value : "2"
    },
    {
      name : "Spider Man",
      value : "3"
    },
    {
      name : "Ant Man",
      value : "4"
    }
  ];

}
