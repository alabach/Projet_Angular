import { TestBed } from '@angular/core/testing';

import { ClasseservService } from './classeserv.service';

describe('ClasseservService', () => {
  let service: ClasseservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClasseservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
