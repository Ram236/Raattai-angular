import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../product';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers:[ShopService]
})
export class ProductDetailComponent {
  productDetail: product | undefined;
  focussedImage: string | undefined;
  constructor(private ss: ShopService) {}
  ngOnInit() {
    this.productDetail = history.state;
    this.focussedImage = this.productDetail?.image;
  }

  focusImage(image: any) {
    this.focussedImage = image.filename;
  }

  add2Cart(product:product){
    this.ss.add2cart(product._id).subscribe(data=>{
      alert('added');
    })
  }
}
