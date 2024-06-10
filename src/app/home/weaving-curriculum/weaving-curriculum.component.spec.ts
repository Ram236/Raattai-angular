import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeavingCurriculumComponent } from './weaving-curriculum.component';

describe('WeavingCurriculumComponent', () => {
  let component: WeavingCurriculumComponent;
  let fixture: ComponentFixture<WeavingCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeavingCurriculumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeavingCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
