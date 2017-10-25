import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BittrexBalanceManagementComponent } from './components/bittrex-balance-management/bittrex-balance-management.component';
import { BittrexMarketStatusComponent } from './components/bittrex-market-status/bittrex-market-status.component';
import { BittrexBalanceManagementService } from './services/bittrex-balance-management.service';
import { BittrexMarketStatusService } from './services/bittrex-market-status.service';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AppRouting } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BittrexBalanceManagementComponent,
    BittrexMarketStatusComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JsonpModule,
    FormsModule,
    AppRouting
  ],
  providers: [
    BittrexBalanceManagementService,
    BittrexMarketStatusService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
