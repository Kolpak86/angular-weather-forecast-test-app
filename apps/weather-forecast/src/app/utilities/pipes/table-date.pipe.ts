import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { TimeTemperature } from '@angular-dev-test-task/api-interfaces';

import {
  AppState,
  selectTimeTemperatureOpt,
} from '@angular-dev-test-task/core-state';

@Pipe({
  name: 'tableDate',
})
export class TableDatePipe implements PipeTransform {
  private timeTemperatureOpt!: TimeTemperature;
  constructor(private store: Store<AppState>, private datePipe: DatePipe) {
    this.store.select(selectTimeTemperatureOpt).subscribe((opt) => {
      this.timeTemperatureOpt = opt;
    });
  }

  transform(value: string | number): string | null {
    if (typeof value === 'string') {
      return value;
    }
    if (this.timeTemperatureOpt === TimeTemperature.hourly) {
      return this.datePipe.transform(value * 1000, 'shortTime');
    }
    return this.datePipe.transform(value * 1000);
  }
}
