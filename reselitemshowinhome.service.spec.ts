import { TestBed } from '@angular/core/testing';

import { ReselitemshowinhomeService } from './reselitemshowinhome.service';

describe('ReselitemshowinhomeService', () => {
  let service: ReselitemshowinhomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReselitemshowinhomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
