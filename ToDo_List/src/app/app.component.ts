import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Title } from '@angular/platform-browser';
class Chore{
    constructor(
      public title: String,
      public assignedPerson: String | undefined = "", // does not need an assigned person
      public done: boolean
    ){}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo_List';
  public chores: Chore[];
  public chore: Chore;

  constructor(){
    this.chore = new Chore("clean", "Dad", false)
    this.chores = new Array;
    this.chores.fill(this.chore)
  }


}
