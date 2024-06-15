import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/dynamic-modal.service';
import { SharedService } from '../services/shared.service';

interface address {
  title: String;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent implements OnInit {
  userDetails: any;
  addressList: address[] = [];
  constructor(
    private auth: AuthService,
    private ms: ModalService,
    private us: SharedService
  ) {
    this.ms.addressAddObs.subscribe(data=>{
      if(data){
        this.fetchAddresslist();
      }
    })
  }
  ngOnInit() {
    this.userDetails = this.auth.getUser().user;
    console.log(this.userDetails);
    this.fetchAddresslist();    
  }

  fetchAddresslist() {
    this.us.getDeliveryAddressList().subscribe((data) => {
      this.addressList = data.list;
    });
  }

  async openAddressForm() {
    const { AddressFormComponent } = await import(
      '../../shared/address-form/address-form.component'
    );
    this.ms.openModal(AddressFormComponent);
  }
}
