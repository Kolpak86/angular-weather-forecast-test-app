import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicInputComponent } from './components/dynamic-input/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { GeocodeEffects } from './state/geocode/geocode.effects';
import { StoreModule } from '@ngrx/store';
import { geocodeReducer } from './state/geocode/geocode.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    TableComponent,
    DynamicInputComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([GeocodeEffects]),
    StoreModule.forRoot({ geocode: geocodeReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
