import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../product';
import { ShopService } from '../../shop.service';
import { InfoDialogComponent } from 'src/app/shared/info-dialog/info-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers:[ShopService]
})
export class ProductDetailComponent {
  productDetail: product | undefined;
  focussedImage: string | undefined;
  constructor(private ss: ShopService, private dialog :MatDialog) {}
  ngOnInit() {
    this.productDetail = history.state;
    this.focussedImage = this.productDetail?.image;
  }

  focusImage(image: any) {
    this.focussedImage = image.filename;
  }

  add2Cart(product:product){
    this.ss.add2cart(product.slug).subscribe(data=>{
      this.dialog.open(InfoDialogComponent, {
        width: '500px',
        data: "Item added to cart",
      });    
    })
  }
}
