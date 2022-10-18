import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientecrearComponent } from './clientecrear.component';

describe('ClientecrearComponent', () => {
  let component: ClientecrearComponent;
  let fixture: ComponentFixture<ClientecrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientecrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientecrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
