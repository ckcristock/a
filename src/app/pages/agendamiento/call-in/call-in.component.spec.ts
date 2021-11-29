/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CallInComponent } from './call-in.component';

describe('CallInComponent', () => {
  let component: CallInComponent;
  let fixture: ComponentFixture<CallInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
