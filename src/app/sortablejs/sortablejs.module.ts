import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortablejsRoutingModule } from './sortablejs-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SortablejsRoutingModule
  ]
})
export class SortablejsModule { }
