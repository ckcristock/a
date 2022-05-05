/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DispensingPointComponent } from './dispensing-point.component';

describe('DispensingPointComponent', () => {
  let component: DispensingPointComponent;
  let fixture: ComponentFixture<DispensingPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispensingPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispensingPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
