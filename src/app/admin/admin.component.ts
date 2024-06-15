import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { RpTableComponent } from '../shared/rp-table/rp-table.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  products:any;
  constructor(private shared: SharedService) {}
  ngOnInit(): void {
    this.shared.getProducts().subscribe((data) => {
      this.products = data;
      console.log(data)
    });
  }
}
