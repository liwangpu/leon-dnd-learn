import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortablejsRoutingModule } from './sortablejs-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContainerComponent } from './components/container/container.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    SortablejsRoutingModule
  ]
})
export class SortablejsModule { }
