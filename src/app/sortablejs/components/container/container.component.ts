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
  public constructor() { }

  public ngOnInit(): void {
    new Sortable(this.list.nativeElement, {
      group: 'shared', // set both lists to same group
      animation: 150,
      store: {
        /**
         * Get the order of elements. Called once during initialization.
         * @param   {Sortable}  sortable
         * @returns {Array}
         */
        get: function (sortable: any) {
          var order = localStorage.getItem(sortable.options.group.name);
          return order ? order.split('|') : [];
        },

        /**
         * Save the order of elements. Called onEnd (when the item is dropped).
         * @param {Sortable}  sortable
         */
        set: function (sortable: any) {
          var order = sortable.toArray();
          localStorage.setItem(sortable.options.group.name, order.join('|'));
        }
      }
    });
  }

}
