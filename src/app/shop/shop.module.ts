import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
@NgModule({
  declarations: [
    ShopComponent,
    ProductDetailComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ShopRoutingModule,
    MaterialModule
  ],
  providers:[CartService]
})
export class ShopModule { }
