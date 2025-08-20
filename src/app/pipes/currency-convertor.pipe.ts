import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'EurCurrencyConvertor'
})
export class EurCurrencyConvertorPipe implements PipeTransform {

  transform(value: number|string): string {
    if(typeof value == 'string') {
      value = parseFloat(value);
    }
    return  parseFloat(String(value / 1.96)).toFixed(2).toLowerCase();
  }

}
