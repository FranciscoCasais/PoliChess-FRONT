import { TestBed } from '@angular/core/testing';

import { JugadorTorneoService } from './jugador-torneo.service';

describe('JugadorTorneoService', () => {
  let service: JugadorTorneoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugadorTorneoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
