import { DataTable } from '@angular-dev-test-task/api-interfaces';
import {
  AppState,
  selectWeatherForecastInfo,
} from '@angular-dev-test-task/core-state';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-dev-test-task-table',
  template: `
    <table *ngIf="dataTable$ | async as dataTable; else noData" id="cities">
      <tr>
        <th *ngFor="let item of dataTable.column">
          {{ item | tableDate }}
        </th>
      </tr>
      <tr *ngFor="let row of dataTable.row">
        <td *ngFor="let cell of row; index as i">
          {{ cell | tableTemperature: i }}
        </td>
      </tr>
    </table>
    <ng-template #noData>
      <p>No data</p>
    </ng-template>
  `,
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  dataTable$!: Observable<DataTable | null>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.dataTable$ = this.store.select(selectWeatherForecastInfo);
  }
}
