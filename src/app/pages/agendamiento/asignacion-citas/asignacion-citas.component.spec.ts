import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionCitasComponent } from './asignacion-citas.component';

describe('AsignacionCitasComponent', () => {
  let component: AsignacionCitasComponent;
  let fixture: ComponentFixture<AsignacionCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
