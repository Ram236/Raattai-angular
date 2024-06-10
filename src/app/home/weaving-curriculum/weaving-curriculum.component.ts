import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeavingCurriculumApiService } from './weaving-curriculum.service';
import { InfoDialogComponent } from 'src/app/shared/info-dialog/info-dialog.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-weaving-curriculum',
  templateUrl: './weaving-curriculum.component.html',
  styleUrls: ['./weaving-curriculum.component.scss'],
})
export class WeavingCurriculumComponent implements OnInit {
  weavingForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private apiService: WeavingCurriculumApiService,
    private router:Router,
    private dialog:MatDialog
  ) {}

  ngOnInit(): void {
    this.weavingForm = this.formBuilder.group({
      EducationalInstitution: ['', Validators.required],
      InstitutionName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
      ],
      PersonToConnect: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
      ],
      Email: ['', [Validators.required, Validators.email]],
      ContactNumber: [
        '',
        [Validators.required, Validators.pattern('^\\d{10}$')],
      ],
      InstitutionAddress: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.weavingForm.valid) {
      console.log(this.weavingForm.value);

      this.apiService
        .submitWeavingCurriculumData(this.weavingForm.value)
        .subscribe(
          (response) => {
            const dialogRef = this.dialog.open(InfoDialogComponent, {
              width: '500px',
              data: 'Thank you for enquiry with Workshop',
            });
            dialogRef.afterClosed().subscribe((data) => {
              this.router.navigate(['/home']);
            });
            this.weavingForm.reset();
          },
          (error) => {
            alert('Not Submitted');
            console.error(error);
            this.errorMessage = error.error.message;
          }
        );
    } else {
      this.markFormGroupTouched(this.weavingForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}
