import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TreeComponent } from './tree/tree.component';
import { MaterialModule } from '../material/material.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TableDetailComponent } from './table-detail/table-detail.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', component: TreeComponent }
];
@NgModule({
  declarations: [TreeComponent, TableDetailComponent],
  entryComponents: [TableDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DragDropModule,
    RouterModule.forChild(routes)
  ]
})
export class TreesModule { }
