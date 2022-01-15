import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableTemperature',
})
export class TableTemperaturePipe implements PipeTransform {
  transform(value: string | number, index: number): string {
    const strValue = value.toString();
    return index === 0 ? strValue : strValue + ' C';
  }
}
