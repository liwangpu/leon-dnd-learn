import { Component, OnInit, ChangeDetectionStrategy, ElementRef, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import * as faker from 'faker';
import Sortable from 'sortablejs';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleListComponent implements OnInit, OnDestroy {

  public items: string[] = [];
  private subs = new SubSink();
  public constructor(
    private el: ElementRef
  ) {
    for (let i = 0; i < 8; i++) {
      this.items.push(faker.random.words(1));
    }
  }

  public ngOnDestroy(): void {

  }

  public ngOnInit(): void {
    new Sortable(this.el.nativeElement, {
      group: 'simple-list', // set both lists to same group
      animation: 150,
      // store: {
      //   /**
      //    * Get the order of elements. Called once during initialization.
      //    * @param   {Sortable}  sortable
      //    * @returns {Array}
      //    */
      //   get: function (sortable: any) {
      //     var order = localStorage.getItem(sortable.options.group.name);
      //     return order ? order.split('|') : [];
      //   },

      //   /**
      //    * Save the order of elements. Called onEnd (when the item is dropped).
      //    * @param {Sortable}  sortable
      //    */
      //   set: function (sortable: any) {
      //     var order = sortable.toArray();
      //     localStorage.setItem(sortable.options.group.name, order.join('|'));
      //   }
      // }
    });
  }

}
