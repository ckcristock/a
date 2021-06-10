import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosGestionComponent } from './documentos-gestion.component';

describe('DocumentosGestionComponent', () => {
  let component: DocumentosGestionComponent;
  let fixture: ComponentFixture<DocumentosGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
