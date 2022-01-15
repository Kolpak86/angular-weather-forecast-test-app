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
import { WeatherForecastEffects } from './state/weather-forecast/weather-forecast.effects';
import { weatherForecastReducer } from './state/weather-forecast/weather-forecast.reducer';
import { geocodeReducer } from './state/geocode/geocode.reducer';
import { TableDatePipe } from './utilities/pipes/table-date.pipe';
import { DatePipe } from '@angular/common';
import { TableTemperaturePipe } from './utilities/pipes/table-temperature.pipe';

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
    EffectsModule.forRoot([GeocodeEffects, WeatherForecastEffects]),
    StoreModule.forRoot({
      geocode: geocodeReducer,
      weatherForecast: weatherForecastReducer,
    }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
