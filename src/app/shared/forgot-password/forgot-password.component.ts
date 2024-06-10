import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { forgot_password } from './forgot-password';
import { ForgotPasswordComponentApiService } from './forgot-password.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  credentials: forgot_password = {
    email: '',
  };

  errorMessage: string = '';
  isOtpSent: boolean = false;
  isOtpVerified: boolean = false;
  otp: string = '';
  password: string = '';
  reenterPassword: string = '';
  otpResponse: any;

  @ViewChildren('codeInput') codeInputs!: QueryList<ElementRef>;

  constructor(
    private apiService: ForgotPasswordComponentApiService,
    private dialog: MatDialog,
    private router:Router
  ) {}

  getCode() {
    this.apiService.forgotPassword(this.credentials).subscribe(
      (response) => {
        console.log(response);
        this.isOtpSent = true;
        this.otpResponse = response;
      },
      (error) => {
        console.error(error);
        this.errorMessage = error.error.message;
      }
    );
  }

  onKeyup(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.value.length === 1 && index < this.codeInputs.length - 1) {
      this.codeInputs.toArray()[index + 1].nativeElement.focus();
    }
    this.updateOtp();
  }

  finishFunction(event: KeyboardEvent) {
    this.updateOtp();
    if (this.otp.length === 6) {
      console.log('Verification code entered completely');
      console.log(this.credentials);
      this.verifyOtp();
    }
  }

  updateOtp() {
    this.otp = this.codeInputs
      .toArray()
      .map((input) => input.nativeElement.value)
      .join('');
  }

  verifyOtp() {
    this.apiService.verifyOtp(this.otp, this.otpResponse).subscribe(
      (response) => {
        console.log(response);
        this.isOtpVerified = true;
      },
      (error) => {
        console.error(error);
        this.errorMessage = error.error.message;
      }
    );
  }

  changePassword() {
    if (this.password !== this.reenterPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    this.apiService.changePassword(this.password, this.otpResponse).subscribe(
      (response) => {
        const dialogRef = this.dialog.open(InfoDialogComponent, {
          width: '500px',
          data: response.message,
        });

        dialogRef.afterClosed().subscribe((data) => {
          this.router.navigate(['/login']);
        });
      },
      (error) => {
        console.error(error);
        this.errorMessage = error.error.message;
      }
    );
  }

  resendCode() {
    this.getCode();
  }

  changeEmail() {
    this.isOtpSent = false;
    this.isOtpVerified = false;
    this.credentials.email = '';
    this.errorMessage = '';
    this.codeInputs.forEach((input) => (input.nativeElement.value = ''));
    this.otp = '';
    this.password = '';
    this.reenterPassword = '';
  }
}
