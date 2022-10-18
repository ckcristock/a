/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AsignacionCitasService } from './asignacion-citas.service';

describe('Service: AsignacionCitas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsignacionCitasService]
    });
  });

  it('should ...', inject([AsignacionCitasService], (service: AsignacionCitasService) => {
    expect(service).toBeTruthy();
  }));
});
