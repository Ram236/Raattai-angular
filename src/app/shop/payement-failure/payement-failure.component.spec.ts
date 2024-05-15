import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementFailureComponent } from './payement-failure.component';

describe('PayementFailureComponent', () => {
  let component: PayementFailureComponent;
  let fixture: ComponentFixture<PayementFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayementFailureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayementFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
