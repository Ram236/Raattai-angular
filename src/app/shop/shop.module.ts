import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { PayementSuccessComponent } from './payement-success/payement-success.component';
import { PayementFailureComponent } from './payement-failure/payement-failure.component';

@NgModule({
  declarations: [
    ShopComponent,
    ProductDetailComponent,
    CartComponent,
    PayementSuccessComponent,
    PayementFailureComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ShopRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[CartService]
})
export class ShopModule { }
