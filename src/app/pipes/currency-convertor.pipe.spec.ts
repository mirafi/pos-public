import { EurCurrencyConvertorPipe } from './currency-convertor.pipe';

describe('CurrencyConvertorPipe', () => {
  it('create an instance', () => {
    const pipe = new EurCurrencyConvertorPipe();
    expect(pipe).toBeTruthy();
  });
});
