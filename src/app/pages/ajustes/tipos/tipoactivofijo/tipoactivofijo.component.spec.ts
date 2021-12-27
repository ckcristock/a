import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoactivofijoComponent } from './tipoactivofijo.component';

describe('TipoactivofijoComponent', () => {
  let component: TipoactivofijoComponent;
  let fixture: ComponentFixture<TipoactivofijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoactivofijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoactivofijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
