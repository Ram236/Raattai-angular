import { Component, OnInit } from '@angular/core';
import { RegisterApiService } from './register.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  addUser: FormGroup = this.fb.group({
    firstName: [
      null,
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
    lastName: [
      null,
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
    email: [
      null,
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
    mobileNumber: [
      null,
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
    password: [
      null,
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
    confirmPassword: [
      null,
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
  });
  errors = { confirmPassword: '' };

  ngOnInit(): void {
   
  }

  handleSubmit() {
    if (this.addUser?.value.password !== this.addUser?.value.confirmPassword) {
      this.errors.confirmPassword = 'Passwords do not match';
      return;
    }
  }
  credentials: {
    username: string;
    email: string;
    mobileNumber: number;
    password: string;
    confirmPassword: string;
  } = {
    username: '',
    email: '',
    mobileNumber: 0,
    password: '',
    confirmPassword: '',
  };
  errorMessage: string = '';

  constructor(
    private apiService: RegisterApiService,
    private fb: FormBuilder
  ) {}

  onSubmit() {
    this.credentials.username = this.addUser.get('firstName')?.value
    this.apiService.Register(this.credentials).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
        this.errorMessage = error.error.message;
      }
    );
  }
}
function handleSubmit() {
  throw new Error('Function not implemented.');
}
