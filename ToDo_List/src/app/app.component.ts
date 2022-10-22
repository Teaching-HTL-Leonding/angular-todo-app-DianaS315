import { ASTWithName, core, ThisReceiver } from '@angular/compiler';
import { Component, Input } from '@angular/core';

class Chore {
  constructor(
    public title: String = '',
    public done: boolean = false,
    public assignedPerson?: String // does not need an assigned person
  ) {}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public chores: Chore[];
  public chore = new Chore('', false, '');
  public filterUnfinishedTasks: boolean = false;
  public filterAssignedPerson: String = '';
  public isInEditMode: boolean = false;

  constructor() {
    this.chores = [
      new Chore('cook', true, 'Maria Musterfrau'),
      new Chore('bake', false, 'Maria Musterfrau'),
      new Chore('clean', false, 'Max Mustermann'),
    ];
  }
  public createNewChore() {
    this.chore = new Chore();
    this.chores.push(this.chore);
  }

  public finishedChore(finishedChore: Chore) {
    for (let i = 0; i < this.chores.length; i++) {
      if (this.chores[i + 1].title === finishedChore.title) {
        this.chores[i + 1].done = !this.chores[i + 1].done;
      }
    }
  }

  public getChores(): Chore[] {
    let result: Chore[] = this.chores;

    if (this.filterAssignedPerson !== '') {
      result = result.filter(
        (chore) => chore.assignedPerson === this.filterAssignedPerson
      );
    }

    if (this.filterUnfinishedTasks) {
      result = result.filter((chore) => !chore.done);
    }
    return result;
  }

  public editMode() {
    this.isInEditMode = !this.isInEditMode;
  }

  public resetFilter() {
    this.filterAssignedPerson = '';
    this.filterUnfinishedTasks = false;
  }
}
