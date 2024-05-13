import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class UtilityService {

    login = new BehaviorSubject(false);
    cartCount = new BehaviorSubject(0);
    loginObs = this.login.asObservable();
    cartCountObs = this.cartCount.asObservable();

    setLogin(logged:boolean){
        this.login.next(logged);
    }
    getLogin(){
        return this.loginObs.subscribe();
    }
    getCartCount(){
        return this.cartCount;
    }
    setCartCount(count:number){
        this.cartCount.next(count);
    }
}