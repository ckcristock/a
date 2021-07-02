import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenCitasComponent } from './resumen-citas.component';

describe('ResumenCitasComponent', () => {
  let component: ResumenCitasComponent;
  let fixture: ComponentFixture<ResumenCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
