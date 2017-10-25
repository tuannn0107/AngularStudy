/**
 * Created by TuanNN on 10/25/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BittrexMarketStatusComponent} from './components/bittrex-market-status/bittrex-market-status.component';

const routes: Routes = [
  { path: 'bittrex-market-status', component: BittrexMarketStatusComponent, data: {state: 'user'}},
  { path: '', redirectTo: '/bittrex-market-status', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouting { }
