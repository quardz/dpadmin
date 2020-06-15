import { TestBed } from '@angular/core/testing';

import { WpimportService } from './wpimport.service';

describe('WpimportService', () => {
  let service: WpimportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WpimportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
