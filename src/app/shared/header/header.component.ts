import { Component, OnInit, signal } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { CartService } from 'src/app/shop/cart/cart.service';
import { LoginApiService } from '../login/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [CartService],
})
export class HeaderComponent implements OnInit {
  showHeader = true;
  loggedIn = false;
  user:any;
  cartCount = signal(0);
  constructor(private util: UtilityService, private cartService: CartService, private loginService:LoginApiService) {
    this.util.cartCount.subscribe((data) => {
      this.cartCount = signal(data);
    });
    this.util.loginObs.subscribe(data=>{
      this.loggedIn = data;
    })
  }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!)
    this.cartService.getCartItems(this.user.user._id).subscribe(data=>{
      console.log(data);
      this.util.setCartCount(data.cart.items.length);
    });
  }

  logout(){
    this.loginService.logout().subscribe(data=>{
      this.util.setLogin(false);
      localStorage.removeItem('user');
    })
  }
}
