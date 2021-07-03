import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionAgendamientoComponent } from './informacion-agendamiento.component';

describe('InformacionAgendamientoComponent', () => {
  let component: InformacionAgendamientoComponent;
  let fixture: ComponentFixture<InformacionAgendamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionAgendamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionAgendamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
