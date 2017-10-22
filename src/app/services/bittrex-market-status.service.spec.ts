import { TestBed, inject } from '@angular/core/testing';

import { BittrexMarketStatusService } from './bittrex-market-status.service';

describe('BittrexMarketStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BittrexMarketStatusService]
    });
  });

  it('should be created', inject([BittrexMarketStatusService], (service: BittrexMarketStatusService) => {
    expect(service).toBeTruthy();
  }));
});
