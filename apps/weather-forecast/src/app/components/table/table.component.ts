import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DataTable } from '../../models';
import { AppState } from '../../state/app.state';
import { selectWeatherForecastInfo } from '../../state/weather-forecast/weather-forecast.selectors';

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
          {{ cell | tableTemperature: i }}
        </td>
      </tr>
    </table>
  `,
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit, OnDestroy {
  dataTable$!: Observable<DataTable>;
  private subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.dataTable$ = this.store.select(selectWeatherForecastInfo);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
