import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef,
  Type,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dynamic-dialog',
  template: `<ng-template #dynamicComponent></ng-template>`,
})
export class DynamicDialogComponent implements OnInit {
  @ViewChild('dynamicComponent', { read: ViewContainerRef, static: true })
  dynamicComponent!: ViewContainerRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { component: any; dialogData: any }
  ) {}

  async ngOnInit(): Promise<void> {
    const { AddressFormComponent } = await import('../shared/address-form/address-form.component')
    this.loadComponent(AddressFormComponent);
  }

  loadComponent(component: Type<any>) {
    this.dynamicComponent.clear();
    this.dynamicComponent.createComponent(component);
  }
}
