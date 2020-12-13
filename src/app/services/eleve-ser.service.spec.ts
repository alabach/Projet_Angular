import { TestBed } from '@angular/core/testing';

import { EleveSerService } from './eleve-ser.service';

describe('EleveSerService', () => {
  let service: EleveSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EleveSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
