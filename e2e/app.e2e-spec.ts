import { BittrexPage } from './app.po';

describe('bittrex App', () => {
  let page: BittrexPage;

  beforeEach(() => {
    page = new BittrexPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
