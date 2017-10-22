import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BittrexBalanceManagementComponent } from './components/bittrex-balance-management/bittrex-balance-management.component';
import { BittrexMarketStatusComponent } from './components/bittrex-market-status/bittrex-market-status.component';
import { BittrexBalanceManagementService } from './services/bittrex-balance-management.service';
import { BittrexMarketStatusService } from './services/bittrex-market-status.service';

@NgModule({
  declarations: [
    AppComponent,
    BittrexBalanceManagementComponent,
    BittrexMarketStatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BittrexBalanceManagementService,
    BittrexMarketStatusService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
