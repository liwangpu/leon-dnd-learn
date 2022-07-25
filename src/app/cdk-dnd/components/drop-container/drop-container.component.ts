import { Component, OnInit, ChangeDetectionStrategy, HostBinding, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DropOpsatService } from '../../services/drop-opsat.service';
import * as _ from 'lodash';
import * as faker from 'faker';
import { IDropContainer } from '../../models/i-drop-container';
import { SubSink } from 'subsink';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drop-container',
  templateUrl: './drop-container.component.html',
  styleUrls: ['./drop-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropContainerComponent implements IDropContainer, OnInit, OnDestroy {

  done = [];
  @HostBinding('attr.drop-container-key')
  public key: string;
  @HostBinding('class.active')
  public active?: boolean;
  private subs = new SubSink();
  public constructor(
    private opsat: DropOpsatService,
    private cdr: ChangeDetectorRef
  ) {
    this.key = faker.datatype.uuid();
  }



  public ngOnInit(): void {
    this.opsat.registryDropContainer(this);
    this.subs.sink = this.opsat.activeContainer$
      .subscribe(key => {
        this.active = key === this.key;
        // this.cdr.markForCheck();
        this.cdr.detectChanges();
      });
  }

  public ngOnDestroy(): void {
    this.opsat.deRegistryDropContainer(this.key);
  }

  drop(event: CdkDragDrop<string[]>) {
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // } else {
    //   transferArrayItem(
    //     event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex,
    //   );
    // }

    console.log('drop:', this.key);
  }


}
