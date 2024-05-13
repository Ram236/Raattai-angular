import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [CartService],
})
export class CartComponent implements OnInit {
  cartitems: any[] = [];
  cartTotal:number = 0
  ngOnInit(): void {
    const userid = JSON.parse(localStorage.getItem('user')!).user._id;
    this.cs.getCartItems(userid).subscribe(res=>{      
      this.cartitems = res.cart.items;
      this.cartTotal = res.total;
    })    
  }
  constructor(private cs: CartService) {}
}
