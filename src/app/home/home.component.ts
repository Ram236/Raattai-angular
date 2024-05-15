import { Component, OnInit } from '@angular/core';
import { CartService } from '../shop/cart/cart.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[CartService]
})
export class HomeComponent implements OnInit {

  userDetails:any
  constructor(private cartService:CartService, private as:AppService){

  }

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('user')!)
    this.cartService.getCartItems().subscribe(data=>{
      this.as.setCartCount(data.count);
    })
  }
}
