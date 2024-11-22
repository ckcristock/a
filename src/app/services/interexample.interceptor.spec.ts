import { TestBed } from '@angular/core/testing';

import { InterexampleInterceptor } from './interexample.interceptor';

describe('InterexampleInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterexampleInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterexampleInterceptor = TestBed.inject(InterexampleInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
