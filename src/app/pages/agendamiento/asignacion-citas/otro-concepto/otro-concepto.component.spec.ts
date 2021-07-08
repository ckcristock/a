import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroConceptoComponent } from './otro-concepto.component';

describe('OtroConceptoComponent', () => {
  let component: OtroConceptoComponent;
  let fixture: ComponentFixture<OtroConceptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtroConceptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtroConceptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
