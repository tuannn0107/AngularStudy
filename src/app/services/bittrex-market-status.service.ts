import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Coin} from '../models/coin';
import {Observable} from 'rxjs';

@Injectable()
export class BittrexMarketStatusService {
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) { }

  /*getMarket(): Observable<Array<Coin> {
    /!*return this.httpClient.get('').map(it => {
      new Coin();
    });*!/
  }*/

}
