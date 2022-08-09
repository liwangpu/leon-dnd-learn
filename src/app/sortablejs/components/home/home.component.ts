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
      group: {
        name: 'shared',
        pull: 'clone',
        put: false
      },
      sort: false,
      animation: 150,
      setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl: any) {
        console.log('set data dragEl:', dragEl);
        console.log('set data dataTransfer:', dataTransfer);
        // dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
        dataTransfer.setData('Text', '1235453'); // `dataTransfer` object of HTML5 DragEvent
        
        // const crt = document.createElement('div');
        // crt.style.backgroundColor = "black";
        // crt.style.width = "200px";
        // crt.style.height = "200px";
        // // crt.style.backgroundColor="linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)";
        // document.body.appendChild(crt);
        // dataTransfer.setDragImage(crt, 0, 0);
      },
      onStart(evt) {
        // console.log('start:', evt);
      },
      onEnd(e: any) {
        var itemEl = e.item;  // dragged HTMLElement
        // e.to;    // target list
        // e.from;  // previous list
        // e.oldIndex;  // element's old index within old parent
        // e.newIndex;  // element's new index within new parent
        // e.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
        // e.newDraggableIndex; // element's new index within new parent, only counting draggable elements
        // e.clone // the clone element
        // e.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
        // console.log('e:',e);
        // console.log('end:', (e.originalEvent as DragEvent).dataTransfer?.getData('Text'));
        // console.log('itemEl:', itemEl);
        // let condition = true // Your condition here
        // if (condition) {
        //   itemEl.parentElement.removeChild(itemEl);
        //   return;
        // }
      },
      onMove: function (/**Event*/evt, /**Event*/originalEvent) {
        // Example: https://jsbin.com/nawahef/edit?js,output
        evt.dragged; // dragged HTMLElement
        evt.draggedRect; // DOMRect {left, top, right, bottom}
        evt.related; // HTMLElement on which have guided
        evt.relatedRect; // DOMRect
        evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
        // originalEvent.clientY; // mouse position
        // return false; — for cancel
        // return -1; — insert before target
        // return 1; — insert after target
        // return true; — keep default insertion point based on the direction
        // return void; — keep default insertion point based on the direction
        // console.log('move:', evt);
        return true;
      },
    });

    // new Sortable(document.getElementById('list2')!, {
    //   group: 'shared', // set both lists to same group
    //   animation: 150
    // });
  }

  public addToList1(): void {
    // console.log('todos:', this.todos);
    this.todos.push(faker.random.words(2));
  }
}
