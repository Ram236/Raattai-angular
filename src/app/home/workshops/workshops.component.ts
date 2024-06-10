import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkshopsApiService } from './workshop.service';
import { InfoDialogComponent } from 'src/app/shared/info-dialog/info-dialog.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss'],
})
export class WorkshopsComponent implements OnInit {
  workshopForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private apiService: WorkshopsApiService,
    private router:Router,
    private dialog:MatDialog
  ) {}

  ngOnInit(): void {
    this.workshopForm = this.formBuilder.group({
      Industry: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      NoOfPeople: [
        '',
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      Date: ['', Validators.required],
      PersonToConnect: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
      ],
      Email: ['', [Validators.required, Validators.email]],
      ContactNumber: [
        '',
        [Validators.required, Validators.pattern('^\\d{10}$')],
      ],
      Address: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.workshopForm.valid) {
      console.log(this.workshopForm.value);
      this.apiService.submitWorkshopForm(this.workshopForm.value).subscribe(
        (response: any) => {
          const dialogRef = this.dialog.open(InfoDialogComponent, {
            width: '500px',
            data: 'Thank you for enquiry with Workshop',
          });
          dialogRef.afterClosed().subscribe((data) => {
            this.router.navigate(['/home']);
          });
          this.workshopForm.reset();
        },
        (error: any) => {
          console.error('Error submitting workshop:', error);
          this.errorMessage =
            'Failed to submit the workshop. Please try again later.';
        }
      );
    } else {
      this.markFormGroupTouched(this.workshopForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}
