import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicInputComponent } from './components/dynamic-input/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableDatePipe } from './utilities/pipes/table-date.pipe';
import { DatePipe } from '@angular/common';
import { TableTemperaturePipe } from './utilities/pipes/table-temperature.pipe';
import { CoreDataModule } from '@angular-dev-test-task/core-data';
import { CoreStateModule } from '@angular-dev-test-task/core-state';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    TableComponent,
    DynamicInputComponent,
    TableDatePipe,
    TableTemperaturePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreStateModule,
    CoreDataModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
