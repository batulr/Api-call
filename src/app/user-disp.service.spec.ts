import { TestBed } from '@angular/core/testing';

import { UserDispService } from './user-disp.service';

describe('UserDispService', () => {
  let service: UserDispService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDispService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
