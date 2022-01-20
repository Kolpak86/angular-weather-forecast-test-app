import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TableDatePipe } from './pipes/table-date.pipe';
import { TableTemperaturePipe } from './pipes/table-temperature.pipe';

@NgModule({
  declarations: [TableDatePipe, TableTemperaturePipe],
  imports: [CommonModule],
  exports: [TableDatePipe, TableTemperaturePipe],
  providers: [DatePipe],
})
export class UtilityModule {}
