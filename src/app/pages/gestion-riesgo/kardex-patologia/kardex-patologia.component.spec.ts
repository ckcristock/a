import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexPatologiaComponent } from './kardex-patologia.component';

describe('KardexPatologiaComponent', () => {
  let component: KardexPatologiaComponent;
  let fixture: ComponentFixture<KardexPatologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KardexPatologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexPatologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
