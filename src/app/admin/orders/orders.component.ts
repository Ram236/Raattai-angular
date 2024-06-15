import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { OrdersTableComponent } from './orders-table/orders-table.component';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: any = [];
  
  constructor(private g: SharedService) {}
  ngOnInit(): void {
    this.g.getOrders().subscribe((data) => {
      this.orders = data.orders;
    });
    // this.orders =  [
    //   {
    //       "_id": "664dbfbc96611ebd2d84a1f1",
    //       "order_id": "1",
    //       "tracking_id": "313011452414",
    //       "bank_ref_no": "bs2ba1ff13e830",
    //       "order_status": "Success",
    //       "failure_message": "",
    //       "payment_mode": "Credit Card",
    //       "card_name": "Visa",
    //       "status_code": "null",
    //       "status_message": "Transaction is Successful",
    //       "currency": "INR",
    //       "amount": "40000.00",
    //       "billing_name": "null",
    //       "billing_address": "",
    //       "billing_city": "",
    //       "billing_state": "",
    //       "billing_zip": "",
    //       "billing_country": "",
    //       "billing_tel": "null",
    //       "billing_email": "null",
    //       "delivery_name": "",
    //       "delivery_address": "",
    //       "delivery_city": "",
    //       "delivery_state": "",
    //       "delivery_zip": "",
    //       "delivery_country": "",
    //       "delivery_tel": "",
    //       "merchant_param1": "",
    //       "merchant_param2": "",
    //       "merchant_param3": "",
    //       "merchant_param4": "",
    //       "merchant_param5": "",
    //       "vault": "N",
    //       "offer_type": "null",
    //       "offer_code": "null",
    //       "discount_value": "0.0",
    //       "mer_amount": "40000.00",
    //       "eci_value": "null",
    //       "retry": "N",
    //       "response_code": "",
    //       "billing_notes": "",
    //       "trans_date": "22/05/2024 15:19:32",
    //       "bin_country": "UNITED STATES",
    //       "created_at": "2024-05-22T09:49:48.206Z",
    //       "updated_at": "2024-05-22T09:49:48.206Z",
    //       "__v": 0
    //   }];
  }
}
