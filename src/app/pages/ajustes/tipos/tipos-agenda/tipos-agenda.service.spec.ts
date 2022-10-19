/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TiposAgendaService } from './tipos-agenda.service';

describe('Service: TiposAgenda', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiposAgendaService]
    });
  });

  it('should ...', inject([TiposAgendaService], (service: TiposAgendaService) => {
    expect(service).toBeTruthy();
  }));
});
