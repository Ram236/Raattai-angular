import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
//import 'bootstrap'
@Component({
  selector: 'app-payement-success',
  templateUrl: './payement-success.component.html',
  styleUrls: ['./payement-success.component.scss'],
})
export class PayementSuccessComponent implements OnInit {
  txnId: string = '';
  transaction: any;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.route.queryParams.forEach((key) => {
      this.txnId = key['id'];
      this.cartService
        .retrieveTransactionDetails(this.txnId)
        .subscribe((details) => {
          this.transaction = details.order;
        });
    });
  }
}
