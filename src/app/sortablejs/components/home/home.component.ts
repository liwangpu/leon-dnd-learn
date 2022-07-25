import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import * as  st from 'sortablejs';
import Sortable from 'sortablejs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

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

    new Sortable(document.getElementById('list1')!, {
      group: 'shared', // set both lists to same group
      animation: 150
    });

    new Sortable(document.getElementById('list2')!, {
      group: 'shared', // set both lists to same group
      animation: 150
    });
  }

}
