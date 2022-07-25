import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDndRoutingModule } from './cdk-dnd-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DropContainerComponent } from './components/drop-container/drop-container.component';


@NgModule({
  declarations: [
    HomeComponent,
    DropContainerComponent
  ],
  imports: [
    CommonModule,
    CdkDndRoutingModule,
    DragDropModule
  ]
})
export class CdkDndModule { }
