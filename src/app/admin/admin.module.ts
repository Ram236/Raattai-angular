import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from '../admin/orders/orders.component'
import { OrdersTableComponent } from './orders/orders-table/orders-table.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';


@NgModule({
  declarations: [
    AdminComponent,
    OrdersComponent,
    OrdersTableComponent,
    AdminProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule, ReactiveFormsModule,
    
  ]
})
export class AdminModule { }
