import { TestBed } from '@angular/core/testing';

import { FactibilidadesService } from './factibilidades.service';

describe('FactibilidadesService', () => {
  let service: FactibilidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactibilidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
