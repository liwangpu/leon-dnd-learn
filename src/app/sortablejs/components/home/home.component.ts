import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as faker from 'faker';
import Sortable from 'sortablejs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  todos: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
    // Sortable.create(simpleList, { /* options */ });
    // var el = document.getElementById('simpleList');
    // // var sortable = Sortable.create(el!);
    // new Sortable(el!, {
    //   group: 'shared', // set both lists to same group
    //   animation: 150
    // });
    // console.log('title:', Sortable);

    for (let i = 0; i < 10; i++) {
      this.todos.push(faker.random.words(2));
    }

    new Sortable(document.getElementById('list1')!, {
      group: 'shared', // set both lists to same group
      animation: 150
    });

    new Sortable(document.getElementById('list2')!, {
      group: 'shared', // set both lists to same group
      animation: 150
    });
  }

  public addToList1(): void {
    // console.log('todos:', this.todos);
    this.todos.push(faker.random.words(2));
  }
}
