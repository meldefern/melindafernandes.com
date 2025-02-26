import { TestBed } from '@angular/core/testing';

import { CvEntryService } from './cv-entry.service';

describe('CvEntryService', () => {
  let service: CvEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
