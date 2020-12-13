import { TestBed } from '@angular/core/testing';

import { TeacherserService } from './teacherser.service';

describe('TeacherserService', () => {
  let service: TeacherserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
