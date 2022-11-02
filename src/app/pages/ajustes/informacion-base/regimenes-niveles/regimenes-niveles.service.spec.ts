import { TestBed } from '@angular/core/testing';

import { RegimenesNivelesService } from './regimenes-niveles.service';

describe('RegimenesNivelesService', () => {
  let service: RegimenesNivelesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegimenesNivelesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
