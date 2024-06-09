import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactUsApiService } from './contact-us.service';
import { InfoDialogComponent } from 'src/app/shared/info-dialog/info-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactUsForm: FormGroup;
  errorMessage: string = '';

  constructor(private contactService: ContactUsApiService, private dialog:MatDialog) {
    this.contactUsForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[a-zA-Z ]*$')
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[a-zA-Z ]*$')
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contactnumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  get firstname() { return this.contactUsForm.get('firstname'); }
  get lastname() { return this.contactUsForm.get('lastname'); }
  get email() { return this.contactUsForm.get('email'); }
  get contactnumber() { return this.contactUsForm.get('contactnumber'); }
  get subject() { return this.contactUsForm.get('subject'); }
  get message() { return this.contactUsForm.get('message'); }

  onSubmit() {
    if (this.contactUsForm.valid) {
      this.contactService.sendContactForm(this.contactUsForm.value).subscribe(
        response => {
          console.log('Form submitted successfully', response);
          const dialogRef = this.dialog.open(InfoDialogComponent, {
            width: '500px',
            data: 'Form submitted successfully',
          });
          
          this.contactUsForm.reset();
        },
        error => {
          // const dialogRef = this.dialog.open(InfoDialogComponent, {
          //   width: '500px',
          //   data: 'Failed to submit the form. Please try again later.',
          // });
          this.errorMessage = 'Failed to submit the form. Please try again later.';
        }
      );
    } else {
      this.markFormGroupTouched(this.contactUsForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
