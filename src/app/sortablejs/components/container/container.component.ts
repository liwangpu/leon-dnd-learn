import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import Sortable from 'sortablejs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new Sortable(document.getElementById('list3')!, {
      group: 'shared', // set both lists to same group
      animation: 150
    });
  }

}
