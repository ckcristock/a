/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CallInService } from './call-in.service';

describe('Service: CallIn', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallInService]
    });
  });

  it('should ...', inject([CallInService], (service: CallInService) => {
    expect(service).toBeTruthy();
  }));
});
