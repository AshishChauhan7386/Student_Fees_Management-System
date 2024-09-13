import { TestBed } from '@angular/core/testing';

import { FeesdetailsService } from './feesdetails.service';

describe('FeesdetailsService', () => {
  let service: FeesdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeesdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
