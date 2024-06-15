import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit{
  products:any;
  constructor(private shared: SharedService) {}
  ngOnInit(): void {
    this.shared.getProducts().subscribe((data) => {
      this.products = data;
      console.log(data)
    });
  }
  
}
