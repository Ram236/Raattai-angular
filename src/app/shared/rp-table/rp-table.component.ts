import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-rp-table',
  templateUrl: './rp-table.component.html',
  styleUrls: ['./rp-table.component.scss']
})
export class RpTableComponent implements OnInit {

  @Input() tableData: any;
  @Output() updateEmit = new EventEmitter();
  constructor() { }
  dataSource: any;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  displayedColumns: string[] = ['title', 'desc','price', 'edit','action'];


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  delete_item(item:any){

  }
}
