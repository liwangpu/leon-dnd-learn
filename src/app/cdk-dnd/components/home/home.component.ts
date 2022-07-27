import { CdkDragMove, CdkDropList } from '@angular/cdk/drag-drop';
import { Component, OnInit, ChangeDetectionStrategy, ElementRef, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { SubSink } from 'subsink';
import { debounceTime, delay, distinct, distinctUntilChanged, filter } from 'rxjs/operators';
import * as _ from 'lodash';
import { DropOpsatService } from '../../services/drop-opsat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    DropOpsatService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  public activeContainers?: string[];
  @ViewChild(CdkDropList)
  public cdkDropList!: CdkDropList;
  private draging$ = new Subject<CdkDragMove<any>>();
  private subs = new SubSink();
  public constructor(
    private el: ElementRef,
    private opsat: DropOpsatService,
    private cdr: ChangeDetectorRef
  ) { }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public ngOnInit(): void {
    // console.log('el:', this.el.nativeElement);

    // const obs = new ResizeObserver((e, p) => {
    //   console.log('e:', e);
    //   console.log('p:', p);
    // }).observe(this.el.nativeElement);


    // this.subs.sink = this.opsat.activeContainer$.subscribe(key => {
    //   this.activeContainers = [key];
    //   console.log('activeContainers:', this.activeContainers);
    //   this.cdr.markForCheck();
    //   // this.cdr.detectChanges();
    //   // this.cdkDropList['']
    //   // console.log('title:', this.cdkDropList);
    // });

    this.subs.sink = this.opsat.containers$
      // .pipe(delay(1000))
      // .pipe(filter(c => c?.length >= 3))
      .subscribe(keys => {
        this.activeContainers = keys.reverse();
        console.log('activeContainers:', this.activeContainers);
        // this.cdr.markForCheck();
        this.cdr.detectChanges();
      });

    this.subs.sink = this.draging$
      // .pipe(debounceTime(80))
      .pipe(distinctUntilChanged((pre, cur) => _.isEqual(pre.event.target, cur.event.target)))
      .subscribe(it => {
        // this.cdr.markForCheck();
        // this.cdr.detectChanges();
        // this.cdr.checkNoChanges();
        // console.log('item:', it);
        // const evt: HTMLElement = it.event.target as any;
        const ps = (it.event as MouseEvent).composedPath();
        let containerDom: HTMLElement | null = null;
        let containerKey: string | null = null;
        for (let i = 0; i < ps.length - 1; i++) {
          const e: HTMLElement = ps[i] as any;
          if (typeof e.getAttribute === 'function') {
            const key = e.getAttribute('drop-container-key');
            if (key) {
              containerDom = e;
              containerKey = key;
              break;
            }
          }
        }
        // console.log('kkk:',containerKey);
        if (containerKey) {
          // console.log('1:',);
          // this.cdkDropList['_setupInputSyncSubscription'](this.cdkDropList['_dropListRef']);
          // this.cdkDropList['_dropListRef'].beforeStarted.next();
          this.opsat.activeContainer(containerKey);
          // this.cdr.detectChanges();
        }
      });
  }

  public startDrag(): void {

  }

  public onDraging(item: CdkDragMove<any>): void {
    // console.log('draging:', item);
    this.draging$.next(item);
  }

}
