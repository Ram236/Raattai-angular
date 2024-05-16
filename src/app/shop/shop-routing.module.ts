import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { PayementSuccessComponent } from './payement-success/payement-success.component';
import { PayementFailureComponent } from './payement-failure/payement-failure.component';
import {CanActivateRoute} from '../shared/services/authguard.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: ShopComponent,
  },
  {
    path: 'product-detail',
    component: ProductDetailComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate:[CanActivateRoute]
  },
  { path: 'success-payment', component: PayementSuccessComponent },
  { path: 'failure-payment', component: PayementFailureComponent },
  {
    path: 'checkout',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
