import { TestBed } from '@angular/core/testing';

import { GuardexampleGuard } from './guardexample.guard';

describe('GuardexampleGuard', () => {
  let guard: GuardexampleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardexampleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
