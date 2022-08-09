import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortablejsRoutingModule } from './sortablejs-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContainerComponent } from './components/container/container.component';
import { SimpleComponent } from './components/simple/simple.component';
import { SimpleListComponent } from './components/simple-list/simple-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContainerComponent,
    SimpleComponent,
    SimpleListComponent
  ],
  imports: [
    CommonModule,
    SortablejsRoutingModule
  ]
})
export class SortablejsModule { }
