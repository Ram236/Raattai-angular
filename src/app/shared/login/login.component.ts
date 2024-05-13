import { Component } from '@angular/core';
import { LoginApiService } from './login.service'
import { login } from './login';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credentials: login = {
    username: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(private apiService: LoginApiService, private dialog:MatDialog, private router:Router, private util:UtilityService) { }

  onSubmit() {
    this.apiService.login(this.credentials).subscribe(
      response => {
        localStorage.setItem('user', JSON.stringify(response));
        this.util.setLogin(true);
        const dialogRef = this.dialog.open(InfoDialogComponent, {
          width: '500px',
          data: response.message,
        }); 

        dialogRef.afterClosed().subscribe(data=>{
          this.router.navigate(['/home'])
        })
      },
      error => {        
        this.errorMessage = error.error.error;
      }
    );
  }
}
