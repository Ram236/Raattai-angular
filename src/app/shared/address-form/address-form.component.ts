import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../services/dynamic-modal.service';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent {
  addressForm: FormGroup;
  constructor(private fb: FormBuilder, private ms: ModalService, private shared:SharedService) {
    this.addressForm = this.fb.group({
      title: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalcode: ['', [Validators.required]],
      country: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.addressForm.valid) {
      console.log('Delivery Address:', this.addressForm.value);
      this.shared.addDeliveryAddress(this.addressForm.value).subscribe(data=>{

        this.ms.closeModal();
      })
      //call api
      
      // Handle the form submission, e.g., send the data to the server
    } else {
      console.log('Form is invalid');
    }
  }
}
