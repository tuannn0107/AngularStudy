import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BittrexBalanceManagementComponent } from './bittrex-balance-management.component';

describe('BittrexBalanceManagementComponent', () => {
  let component: BittrexBalanceManagementComponent;
  let fixture: ComponentFixture<BittrexBalanceManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittrexBalanceManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittrexBalanceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
