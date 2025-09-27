import { TestBed } from '@angular/core/testing';

import { BehavirialSubService } from './behavirial-sub.service';

describe('BehavirialSubService', () => {
  let service: BehavirialSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehavirialSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
