/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GraficalModuleService } from './grafical-module.service';

describe('Service: GraficalModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraficalModuleService]
    });
  });

  it('should ...', inject([GraficalModuleService], (service: GraficalModuleService) => {
    expect(service).toBeTruthy();
  }));
});
