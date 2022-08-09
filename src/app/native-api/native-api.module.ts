import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NativeApiRoutingModule } from './native-api-routing.module';
import { DraggableListComponent } from './components/draggable-list/draggable-list.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    DraggableListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    NativeApiRoutingModule
  ]
})
export class NativeApiModule { }
