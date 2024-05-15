import { Component, OnInit, signal } from '@angular/core';
import { CartService } from 'src/app/shop/cart/cart.service';
import { LoginApiService } from '../login/login.service';
import { AppService } from 'src/app/app.service';
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
  cartCount = 0;
  constructor(private as:AppService, private loginService: LoginApiService) {
    this.as.loginObs.subscribe(data=>{
      this.loggedIn = data;
    })
    this.as.cartCountObs.subscribe(data=>{
      this.cartCount = data;
    })
  }
  ngOnInit(): void {
    // this.user = JSON.parse(localStorage.getItem('user')!)
    // if(this.user){
    //   this.cartService.getCartItems().subscribe(data=>{
    //     console.log(data);
       
    //   });
    // }
    
  }

  logout(){
    this.loginService.logout().subscribe(data=>{
      this.loggedIn = false;
      localStorage.removeItem('user');
      this.as.setLogin(false);
      this.as.setCartCount(0);
    })
    
  }
}
