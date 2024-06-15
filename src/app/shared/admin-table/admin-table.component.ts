import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss'],
})
export class AdminTableComponent implements OnInit {
  @Input() displayedColumns= [{displayName:'', field:''}];
  @Input() tableData: any;
  @Output() updateEmit = new EventEmitter();
  constructor() {}
  dataSource: any;
  ngOnInit(): void {
    console.log(this.displayedColumns);
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
