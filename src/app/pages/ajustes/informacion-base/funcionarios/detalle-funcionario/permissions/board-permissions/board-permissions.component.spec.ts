import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPermissionsComponent } from './board-permissions.component';

describe('BoardPermissionsComponent', () => {
  let component: BoardPermissionsComponent;
  let fixture: ComponentFixture<BoardPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardPermissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
