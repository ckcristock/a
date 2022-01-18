import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriaContabilidadComponent } from './subcategoria-contabilidad.component';

describe('SubcategoriaContabilidadComponent', () => {
  let component: SubcategoriaContabilidadComponent;
  let fixture: ComponentFixture<SubcategoriaContabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoriaContabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriaContabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
