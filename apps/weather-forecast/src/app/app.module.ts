import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { DynamicInputComponent } from './components/dynamic-input/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@angular-dev-test-task/core-data';
import { CoreStateModule } from '@angular-dev-test-task/core-state';
import { UtilityModule } from '@angular-dev-test-task/utility';

@NgModule({
  declarations: [AppComponent, TableComponent, DynamicInputComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CoreStateModule,
    CoreDataModule,
    UtilityModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
