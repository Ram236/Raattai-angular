import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { InfoDialogComponent } from 'src/app/shared/info-dialog/info-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
    const userid = JSON.parse(localStorage.getItem('user')!)?.user?._id;
    this.cs.getCartItems().subscribe((res) => {
      this.cartitems = res.cart.items;
      this.cartTotal = res.total;
    });
  }
  constructor(
    private cs: CartService,
    private router: Router,
    private as: AppService,
    private dialog:MatDialog
  ) {}
  encRequest: any;
  accessCode = 'AVCT47LA95AS55TCSA';
  redirect() {
    let payload = { amount: this.cartTotal, currency: 'INR' };
    this.cs.initiatePayment(payload).subscribe(
      (data) => {
        this.encRequest = data.key;
        console.log(this.encRequest);
        setTimeout((_: any) => this.form?.nativeElement.submit());
        //this.router.navigate(['/shop/success-payment']);
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  clearCart() {
    this.cs.clearCart().subscribe((data) => {
      const dialogRef = this.dialog.open(InfoDialogComponent, {
        width: '500px',
        data: 'Cart Cleared Successfully',
      });      
      this.as.setCartCount(0);
      this.router.navigate(['/shop']);
    });
  }
}
