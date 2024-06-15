import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersTableComponent } from './orders-table.component';

describe('RpTableComponent', () => {
  let component: OrdersTableComponent;
  let fixture: ComponentFixture<OrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
