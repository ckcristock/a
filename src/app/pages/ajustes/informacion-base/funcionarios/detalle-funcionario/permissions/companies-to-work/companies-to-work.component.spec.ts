import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesToWorkComponent } from './companies-to-work.component';

describe('CompaniesToWorkComponent', () => {
  let component: CompaniesToWorkComponent;
  let fixture: ComponentFixture<CompaniesToWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesToWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesToWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
