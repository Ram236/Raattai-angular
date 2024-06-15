import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DynamicDialogComponent } from '../dynamic-dialog.component';
import { ComponentType } from '@angular/cdk/portal';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private addressAddSubject = new BehaviorSubject(false);
  public addressAddObs = this.addressAddSubject.asObservable();
  constructor(private dialog: MatDialog) {}

  openModal(component: ComponentType<any>, data?: any): void {
    this.dialog.open(DynamicDialogComponent, {
      data: { component, data },
      width: '400px',
    });
  }

  closeModal(): void {
    this.dialog.closeAll();
    this.setAddressAdd(true);
  }
  setAddressAdd(state: boolean) {
    this.addressAddSubject.next(state);
  }
}