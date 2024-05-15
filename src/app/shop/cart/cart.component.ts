import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [CartService],
})
export class CartComponent implements OnInit {
  @ViewChild('form') form: ElementRef | undefined;
  cartitems: any[] = [];
  cartTotal: number = 0;
  ngOnInit(): void {
    const userid = JSON.parse(localStorage.getItem('user')!).user._id;
    this.cs.getCartItems().subscribe((res) => {
      this.cartitems = res.cart.items;
      this.cartTotal = res.total;
    });
  }
  constructor(private cs: CartService, private router: Router) {}
  encRequest:any;
  accessCode = 'AVCT47LA95AS55TCSA';
  redirect() {
    this.cs.initiatePayment().subscribe(data=>{
      this.encRequest = data.key;
      setTimeout((_: any) => this.form?.nativeElement.submit());
      //this.router.navigate(['/shop/success-payment']);
    }, err=>{
      console.log(err.error)
    })
    
  }
}
