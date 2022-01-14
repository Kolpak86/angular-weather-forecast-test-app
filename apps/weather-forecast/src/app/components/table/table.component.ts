import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DataTable } from '../../models';
import { TimeTemperature } from '../../models/time-temperature';
import { AppState } from '../../state/app.state';
import {
  selectDailyWeatherForecastInfo,
  selectHourlyWeatherForecastInfo,
} from '../../state/weather-forecast/weather-forecast.selectors';

@Component({
  selector: 'angular-dev-test-task-table',
  template: `
    <table *ngIf="dataTable$ | async as dataTable" id="cities">
      <tr>
        <th *ngFor="let item of dataTable.column; index as i">
          {{ item | tableDate }}
        </th>
      </tr>
      <tr *ngFor="let row of dataTable.row">
        <td *ngFor="let cell of row; index as i">
          {{ i === 0 ? cell : cell + ' C' }}
        </td>
      </tr>
    </table>
  `,
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  dataTable$!: Observable<DataTable>;
  private subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select((state) => state.geocode.timeTemperatureOpt)
      .subscribe((dayHourOpt) => {
        if (dayHourOpt === TimeTemperature.hourly) {
          this.dataTable$ = this.store.select(selectHourlyWeatherForecastInfo);
        } else {
          this.dataTable$ = this.store.select(selectDailyWeatherForecastInfo);
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
