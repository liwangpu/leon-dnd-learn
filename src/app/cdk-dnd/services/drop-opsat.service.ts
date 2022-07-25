import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IDropContainer } from '../models/i-drop-container';

@Injectable()
export class DropOpsatService {

  private container = new Map<string, IDropContainer>();
  public containers$ = new Subject<string[]>();
  public activeContainer$ = new Subject<string>();
  public constructor() { }

  public registryDropContainer(container: IDropContainer): void {
    this.container.set(container?.key, container);
    this.containers$.next([...this.container.keys()]);
  }

  public deRegistryDropContainer(key: string): void {
    this.container.delete(key);
  }

  public activeContainer(key: string): void {
    this.activeContainer$.next(key);
  }

}
