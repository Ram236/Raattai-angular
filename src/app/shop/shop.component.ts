import { Component, OnInit, signal } from '@angular/core';
import { product } from './product/product';
import { ShopService } from './shop.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers: [ShopService],
})
export class ShopComponent implements OnInit {
  products: product[] = [];

  constructor(private shopService: ShopService, private router:Router) {}
  ngOnInit() {
    this.shopService.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }

  viewDetail(productObj:product){
      this.router.navigate(['/shop/product-detail'], {state:productObj})
  }
}
