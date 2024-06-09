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
    //fetch cart count when user loggedin
    if(this.userDetails){
      this.cartService.getCartItems().subscribe(data=>{
        this.as.setCartCount(data.cart.items.length);
      })
    }

    this.as.loginObs.subscribe(data=>{
      if(!data){
        this.userDetails = null;
      }
    })
    
  }
}
