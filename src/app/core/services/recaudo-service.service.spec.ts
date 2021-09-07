import { TestBed } from '@angular/core/testing';

import { RecaudoServiceService } from './recaudo-service.service';

describe('RecaudoServiceService', () => {
  let service: RecaudoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecaudoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
