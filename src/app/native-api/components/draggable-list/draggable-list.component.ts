import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-draggable-list',
  templateUrl: './draggable-list.component.html',
  styleUrls: ['./draggable-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DraggableListComponent implements OnInit {

  id: string;
  list: any[] = [];
  constructor() {
    this.id = faker.datatype.uuid();
  }

  ngOnInit(): void {
    for (let i = 1; i <= 8; i++) {
      this.list.push(faker.random.words(1));
    }
  }

  onDragStart(evt: any): void {
    console.log('start:', evt);
    evt.dataTransfer.dropEffect = "move";
    evt.dataTransfer.setData("application/my-app", evt.target.id);

  }

  onDrag(evt: MouseEvent) {
    // console.log('drag:', evt);
  }

  onDrop(evt: any) {
    console.log('drop:', evt);
    evt.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var data = evt.dataTransfer.getData("application/my-app");
    console.log('data:', data);
    evt.target.appendChild(document.getElementById(data));
  }

  onDragOver(evt: any) {
    // console.log('over:', evt);
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move"
  }

}
