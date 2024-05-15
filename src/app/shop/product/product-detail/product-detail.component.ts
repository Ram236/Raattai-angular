import { Component } from '@angular/core';

import { product } from '../product';
import { ShopService } from '../../shop.service';
import { InfoDialogComponent } from 'src/app/shared/info-dialog/info-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../../cart/cart.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [ShopService],
})
export class ProductDetailComponent {
  productDetail: product | undefined;
  focussedImage: string | undefined;
  qty: number = 1;
  constructor(
    private ss: ShopService,
    private dialog: MatDialog,
    private cartService: CartService,
    private as:AppService
  ) {}
  ngOnInit() {
    this.productDetail = history.state;
    this.focussedImage = this.productDetail?.image;
  }

  focusImage(image: any) {
    this.focussedImage = image.filename;
  }

  add2Cart(product: product) {
    this.ss.add2cart(product.slug, this.qty).subscribe((data) => {
      this.dialog.open(InfoDialogComponent, {
        width: '500px',
        data: 'Item added to cart',
      });
      const userId = JSON.parse(localStorage.getItem('user')!).user._id;
      this.cartService.getCartItems().subscribe((data) => {
        this.as.setCartCount(data.count)
      });
    });
  }
}
