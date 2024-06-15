import { Component } from '@angular/core';
import { LoginApiService } from './login.service';
import { login } from './login';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credentials: login = {
    username: '',
    password: '',
  };
  errorMessage: string = '';

  constructor(
    private apiService: LoginApiService,
    private dialog: MatDialog,
    private router: Router,
    private as: AppService,
    private auth:AuthService
  ) {}

  onSubmit() {
    this.apiService.login(this.credentials).subscribe(
      (response) => {
        let resp = response;
        this.auth.login(response); //store the user object under auth service
        const dialogRef = this.dialog.open(InfoDialogComponent, {
          width: '500px',
          data: response.message,
        });

        dialogRef.afterClosed().subscribe((data) => {
          this.as.setLogin(true);
          if(resp.user.admin){
            this.as.setAdmin(true);
            this.router.navigate(['/admin']);
          }else {
            this.router.navigate(['/home']);
          }
          
        });
      },
      (error) => {
        this.errorMessage = error.error.error;
        const dialogRef = this.dialog.open(InfoDialogComponent, {
          width: '500px',
          data: this.errorMessage,
        });
      }
    );
  }
}
