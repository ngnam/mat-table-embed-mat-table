import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';
import { SelectionModel } from '@angular/cdk/collections';

interface TaxModel {
  id: string;
  name: string;
  entity: number;
}

const dataTaxSource: TaxModel[] = [
  { id: '1', name: 'sdasd', entity: 2 },
  { id: '11', name: 'sdasd11', entity: 2 },
  { id: '111', name: 'sdasd111', entity: 2 },
  { id: '1111', name: 'sdasd111', entity: 2 },
  { id: '11111', name: 'sdasd1111', entity: 2 },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild('table', {static: true}) table: MatTable<TaxModel>;
  displayedColumns: string[] = ['select', 'name', 'entity', 'edit'];
  dataSource: MatTableDataSource<TaxModel> = new MatTableDataSource(dataTaxSource);
  selection = new SelectionModel<TaxModel>(true, []);
  constructor() { }

  ngOnInit() {
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}