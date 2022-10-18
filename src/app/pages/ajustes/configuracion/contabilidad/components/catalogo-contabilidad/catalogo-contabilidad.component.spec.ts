import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoContabilidadComponent } from './catalogo-contabilidad.component';

describe('CatalogoContabilidadComponent', () => {
  let component: CatalogoContabilidadComponent;
  let fixture: ComponentFixture<CatalogoContabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoContabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoContabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
