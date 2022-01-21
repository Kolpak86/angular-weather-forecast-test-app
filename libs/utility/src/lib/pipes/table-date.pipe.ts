import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TimeTemperature } from '@angular-dev-test-task/api-interfaces';

@Pipe({
  name: 'tableDate',
})
export class TableDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(
    value: string | number,
    timeTemperatureOpt: TimeTemperature | null
  ): string | null {
    if (typeof value === 'string') {
      return value;
    }
    if (timeTemperatureOpt === TimeTemperature.hourly) {
      return this.datePipe.transform(value * 1000, 'shortTime');
    }
    return this.datePipe.transform(value * 1000);
  }
}
