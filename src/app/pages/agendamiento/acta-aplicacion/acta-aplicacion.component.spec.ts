import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActaAplicacionComponent } from './acta-aplicacion.component';

describe('ActaAplicacionComponent', () => {
  let component: ActaAplicacionComponent;
  let fixture: ComponentFixture<ActaAplicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActaAplicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActaAplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
