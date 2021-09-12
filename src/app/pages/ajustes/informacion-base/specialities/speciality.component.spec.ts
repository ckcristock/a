import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialitysComponent } from './speciality.component';

describe('SpecialityComponent', () => {
  let component: SpecialitysComponent;
  let fixture: ComponentFixture<SpecialitysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialitysComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialitysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
