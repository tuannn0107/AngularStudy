import { TestBed, inject } from '@angular/core/testing';

import { BittrexBalanceManagementService } from './bittrex-balance-management.service';

describe('BittrexBalanceManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BittrexBalanceManagementService]
    });
  });

  it('should be created', inject([BittrexBalanceManagementService], (service: BittrexBalanceManagementService) => {
    expect(service).toBeTruthy();
  }));
});
