import { TestBed } from '@angular/core/testing';

import { DptermsService } from './dpterms.service';

describe('DptermsService', () => {
  let service: DptermsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DptermsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
