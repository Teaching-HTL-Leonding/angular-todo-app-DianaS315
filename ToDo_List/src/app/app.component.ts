import { Component } from '@angular/core';
class Chore{
    constructor(
      public title: String,
      public assignedPerson: (String | undefined), // does not need an assigned person
      public done: boolean,
    ){}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo_List';
  public chore: Chore;

  constructor(){
    this.chore = new Chore('clean', 'Dad', false);
  }

}
