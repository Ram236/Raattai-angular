import { Component, OnInit, signal } from '@angular/core';
import { CartService } from 'src/app/shop/cart/cart.service';
import { LoginApiService } from '../login/login.service';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [CartService],
})
export class HeaderComponent implements OnInit {
  showHeader = true;
  loggedIn = false;
  user: any;
  cartCount = 0;
  constructor(
    private as: AppService,
    private loginService: LoginApiService,
    private router: Router,
    private auth:AuthService
  ) {
    this.as.loginObs.subscribe((data) => {
      this.loggedIn = data;
    });
    this.as.cartCountObs.subscribe((data) => {
      this.cartCount = data;
    });
  }
  ngOnInit(): void {}

  logout() {
    this.loginService.logout().subscribe((data) => {
      this.loggedIn = false;
      this.auth.logout();
      this.as.setLogin(false);
      this.as.setCartCount(0);
      this.router.navigate(['/home']);
    });
  }
}
