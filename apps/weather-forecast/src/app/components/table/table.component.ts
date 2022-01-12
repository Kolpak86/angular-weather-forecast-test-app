import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

export interface DataTable {
  column: string;
  row: string[];
}

const Data = [
  { column: 'City', row: ['Minsk', '17 C', '17 C', '17 C', '17 C'] },
  { column: '15 hr', row: ['Minsk', '17 C', '17 C', '17 C', '17 C'] },
  { column: '18 hr', row: ['Minsk', '17 C', '17 C', '17 C', '17 C'] },
  { column: '21 hr', row: ['Minsk', '17 C', '17 C', '17 C', '17 C'] },
  { column: '24 hr', row: ['Minsk', '17 C', '17 C', '17 C', '17 C'] },
];

@Component({
  selector: 'angular-dev-test-task-table',
  template: `
    <table id="cities">
      <tr>
        <th *ngFor="let item of dataTable">
          {{ item.column }}
        </th>
      </tr>
      <tr *ngFor="let item of dataTable">
        <td *ngFor="let cell of item.row">{{ cell }}</td>
      </tr>
    </table>
  `,
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  dataTable: DataTable[] = Data;
  constructor() {}

  ngOnInit(): void {}
}
