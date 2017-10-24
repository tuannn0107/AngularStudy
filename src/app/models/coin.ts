/**
 * Created by TuanNN on 10/22/2017.
 */
export class Coin {
  key: string;
  name: string;
  markap: number;
  volum: number;
  buyVolum: number;
  sellVolum: number;
  score: number;

  constructor(key?: string, name?: string, marcap?: number, volum?: number, buyVolum?: number, sellVolum?: number, score?: number) {
    this.key = key;
    this.name = name;
    this.markap = marcap;
    this.volum = volum;
    this.buyVolum = buyVolum;
    this.sellVolum = sellVolum;
    this.score = score;
  }
}
