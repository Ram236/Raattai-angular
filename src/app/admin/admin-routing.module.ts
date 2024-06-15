import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import {CanActivateRoute} from '../shared/services/authguard.service';
import { OrdersComponent } from './orders/orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: AdminComponent,
  },
  {
    path: 'products',
    component: AdminProductsComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
