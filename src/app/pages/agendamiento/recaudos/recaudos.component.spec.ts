import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaudosComponent } from './recaudos.component';

describe('RecaudosComponent', () => {
  let component: RecaudosComponent;
  let fixture: ComponentFixture<RecaudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecaudosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecaudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
