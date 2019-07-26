import {
  Component, OnInit, ViewChild, ViewChildren, ViewContainerRef,
  ComponentFactoryResolver, Input, ComponentRef
} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material';
import { PeriodicElement, ELEMENT_DATA } from '../tree-data';
import { TableDetailComponent } from '../table-detail/table-detail.component';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})  
export class TreeComponent implements OnInit {
  @ViewChild('table', {static: true}) table: MatTable<PeriodicElement>;
  displayedColumns: string[] = ['position'];
  dataSource = ELEMENT_DATA;
  @ViewChildren('cdkrow', { read: ViewContainerRef }) containers;
  expandedRow: number;
  selection = new SelectionModel<PeriodicElement>(true, []);
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  expandRow(index: number) {
    if (this.expandedRow != null) {
      // clear old message
      this.containers.toArray()[this.expandedRow].clear();
    }
    if (this.expandedRow === index) {
      this.expandedRow = null;
    } else {
      const container = this.containers.toArray()[index];
      // tslint:disable-next-line: no-use-before-declare
      const factory = this.resolver.resolveComponentFactory(TableDetailComponent);
      const tableDetailComponent: ComponentRef<TableDetailComponent> = container.createComponent(factory);
      tableDetailComponent.instance.dataSource =  new MatTableDataSource<PeriodicElement>(this.dataSource[index].children);
      this.expandedRow = index;
    }
  }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.length;
      return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.forEach(row => this.selection.select(row));
    }
}
