import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityModalComponent } from './speciality-modal.component';

describe('SpecialityModalComponent', () => {
  let component: SpecialityModalComponent;
  let fixture: ComponentFixture<SpecialityModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialityModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
