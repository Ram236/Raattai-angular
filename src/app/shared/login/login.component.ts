import { Component } from '@angular/core';
import { LoginApiService } from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credentials: { username: string, password: string } = {
    username: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(private apiService: LoginApiService) { }

  onSubmit() {
    this.apiService.login(this.credentials).subscribe(
      response => {
        console.log(response);
      },
      error => {        
        this.errorMessage = error.error.error;
      }
    );
  }
}
