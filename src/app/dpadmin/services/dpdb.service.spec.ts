import { TestBed } from '@angular/core/testing';

import { DpdbService } from './dpdb.service';

describe('DpdbService', () => {
  let service: DpdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DpdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
