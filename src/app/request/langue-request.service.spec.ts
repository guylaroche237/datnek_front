import { TestBed } from '@angular/core/testing';

import { LangueRequestService } from './langue-request.service';

describe('LangueRequestService', () => {
  let service: LangueRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangueRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
