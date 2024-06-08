import { Component } from '@angular/core';
import { GiftingApiService } from './gifting.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from 'src/app/shared/info-dialog/info-dialog.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gifting',
  templateUrl: './gifting.component.html',
  styleUrls: ['./gifting.component.scss'],
})
export class GiftingComponent {
  formData: {
    NoOfGifts: number;
    NoOfLooms: number;
    loomName: string;
    PersonToConnect: string;
    Email: string;
    ContactNumber: string;
    Address: string;
  } = {
    NoOfGifts: 0,
    NoOfLooms: 0,
    loomName: '',
    PersonToConnect: '',
    Email: '',
    ContactNumber: '',
    Address: '',
  };

  errorMessage: string = '';

  // giftForm: FormGroup = this.fb.group({
  //   noOfGifts: [
  //     null,
  //     {
  //       validators: [Validators.required],
  //       updateOn: 'change',
  //     },
  //   ],
  //   noOfLooms: [
  //     null,
  //     {
  //       validators: [Validators.required],
  //       updateOn: 'change',
  //     },
  //   ],

  //   loomName: [
  //     null,
  //     {
  //       validators: [Validators.required],
  //       updateOn: 'change',
  //     },
  //   ],
  //   phoneNumber: [
  //     null,
  //     {
  //       validators: [Validators.required],
  //       updateOn: 'change',
  //     },
  //   ],
  //   password: [
  //     null,
  //     {
  //       validators: [Validators.required],
  //       updateOn: 'change',
  //     },
  //   ],
  //   confirm_password: [
  //     null,
  //     {
  //       validators: [Validators.required],
  //       updateOn: 'change',
  //     },
  //   ],
  // });

  constructor(
    private apiService: GiftingApiService,
    private dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder
  ) {}

  validateInputs() {
    // ;
    if (!/^\d{10}$/.test(this.formData.ContactNumber)) {
      alert('Please enter a valid 10-digit contact number.');
      return false;
    }

    var namePattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(this.formData.loomName)) {
      alert('Loom name should contain only letters and spaces.');
      return false;
    }

    if (!namePattern.test(this.formData.PersonToConnect)) {
      alert('Person name should contain only letters and spaces.');
      return false;
    }
    return true;
  }
  onSubmit() {
    console.log(this.formData);
    if (this.validateInputs()) {
      this.apiService.submitGiftingData(this.formData).subscribe(
        (response) => {
          const dialogRef = this.dialog.open(InfoDialogComponent, {
            width: '500px',
            data: 'Thank you for enquiry with Gifting',
          });
          dialogRef.afterClosed().subscribe((data) => {
            this.router.navigate(['/home']);
          });
        },
        (error) => {
          this.dialog.open(InfoDialogComponent, {
            width: '500px',
            data: 'Error Occured',
          });

          this.errorMessage = error.error.message;
        }
      );
    }
  }
}
