import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;  

  constructor() { 
    
  } 

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
  login(userRes:any){
    localStorage.setItem('user', JSON.stringify(userRes));
    this.isAuthenticated = !!localStorage.getItem('user');
  }

  logout(): void {
    localStorage.removeItem('user');
    this.isAuthenticated = false;
  }
}