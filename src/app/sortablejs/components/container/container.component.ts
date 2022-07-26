import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import Sortable from 'sortablejs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {

  @ViewChild('list', { static: true })
  public list!: ElementRef;
  constructor() { }

  ngOnInit(): void {
    new Sortable(this.list.nativeElement, {
      group: 'shared', // set both lists to same group
      animation: 150
    });
  }

}
