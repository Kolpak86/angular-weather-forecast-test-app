import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@angular-dev-test-task/core-data';
import { CoreStateModule } from '@angular-dev-test-task/core-state';
import { UtilityModule } from '@angular-dev-test-task/utility';
import { UiDynamicFormModule } from '@angular-dev-test-task/ui-dynamic-form';

@NgModule({
  declarations: [AppComponent, TableComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CoreStateModule,
    CoreDataModule,
    UtilityModule,
    UiDynamicFormModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
