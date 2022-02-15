import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntodispensacionComponent } from './puntodispensacion.component';

describe('PuntodispensacionComponent', () => {
  let component: PuntodispensacionComponent;
  let fixture: ComponentFixture<PuntodispensacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntodispensacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntodispensacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
