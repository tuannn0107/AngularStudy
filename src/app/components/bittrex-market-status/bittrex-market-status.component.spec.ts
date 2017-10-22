import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BittrexMarketStatusComponent } from './bittrex-market-status.component';

describe('BittrexMarketStatusComponent', () => {
  let component: BittrexMarketStatusComponent;
  let fixture: ComponentFixture<BittrexMarketStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittrexMarketStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittrexMarketStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
