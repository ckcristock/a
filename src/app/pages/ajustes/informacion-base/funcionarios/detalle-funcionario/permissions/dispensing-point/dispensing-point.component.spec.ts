import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensingPointComponent } from './dispensing-point.component';

describe('DispensingPointComponent', () => {
  let component: DispensingPointComponent;
  let fixture: ComponentFixture<DispensingPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispensingPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispensingPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
