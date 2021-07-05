import { TestBed } from '@angular/core/testing';

import { QueryAvailabilitySpacesService } from './query-availability-spaces.service';

describe('QueryAvailabilitySpacesService', () => {
  let service: QueryAvailabilitySpacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryAvailabilitySpacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
