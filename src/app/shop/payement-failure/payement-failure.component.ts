import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-payement-failure',
  templateUrl: './payement-failure.component.html',
  styleUrls: ['./payement-failure.component.scss']
})
export class PayementFailureComponent implements OnInit{
  txnId:string = '';
  transaction:any;
  constructor(private route:ActivatedRoute, private cartService:CartService){

  }
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
