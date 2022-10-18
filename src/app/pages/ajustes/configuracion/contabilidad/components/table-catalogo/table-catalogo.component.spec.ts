import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCatalogoComponent } from './table-catalogo.component';

describe('TableCatalogoComponent', () => {
  let component: TableCatalogoComponent;
  let fixture: ComponentFixture<TableCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
