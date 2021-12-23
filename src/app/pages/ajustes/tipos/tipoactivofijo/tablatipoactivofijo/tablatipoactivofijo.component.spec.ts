import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablatipoactivofijoComponent } from './tablatipoactivofijo.component';

describe('TablatipoactivofijoComponent', () => {
  let component: TablatipoactivofijoComponent;
  let fixture: ComponentFixture<TablatipoactivofijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablatipoactivofijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablatipoactivofijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
