import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class AppService {
  private loadingSubject = new BehaviorSubject(false);
  public loadingSubObs = this.loadingSubject.asObservable();
  public loaderSub = new Subject();

  private loginSubject = new BehaviorSubject(false);
  public loginObs = this.loginSubject.asObservable();

  private AdminSubject = new BehaviorSubject(false);
  public adminObs = this.AdminSubject.asObservable();

  private cartCountSubject = new BehaviorSubject(0);
  public cartCountObs = this.cartCountSubject.asObservable();
  setLoading(state: boolean) {
    this.loadingSubject.next(state);
  }

  setLogin(state: boolean) {
    this.loginSubject.next(state);
  }
  setAdmin(state: boolean) {
    this.AdminSubject.next(state);
  }

  setCartCount(count: number) {
    this.cartCountSubject.next(count);
  }
}
