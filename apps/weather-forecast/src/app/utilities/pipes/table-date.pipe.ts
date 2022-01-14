import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { TimeTemperature } from '../../models/time-temperature';
import { AppState } from '../../state/app.state';

@Pipe({
  name: 'tableDate',
})
export class TableDatePipe implements PipeTransform {
  private timeTemperatureOpt!: TimeTemperature;
  constructor(private store: Store<AppState>, private datePipe: DatePipe) {
    this.store
      .select((state) => state.geocode.timeTemperatureOpt)
      .subscribe((opt) => {
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
