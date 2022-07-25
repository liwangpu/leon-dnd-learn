import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as  st from 'sortablejs';

// declare const Sortable: any;

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
    var el = document.getElementById('simpleList');
    // var sortable = Sortable.create(el!);
    new (st as any).Sortable(el!, {
      group: 'shared', // set both lists to same group
      animation: 150
    });
    console.log('title:', (st as any).Sortable);
  }

}
