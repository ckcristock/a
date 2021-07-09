import { TestBed } from '@angular/core/testing';

import { TipificationService } from './tipification.service';

describe('TipificationService', () => {
  let service: TipificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
