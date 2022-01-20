import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GeocodeEffects } from './state/geocode/geocode.effects';
import { WeatherForecastEffects } from './state/weather-forecast/weather-forecast.effects';
import { geocodeReducer } from './state/geocode/geocode.reducer';
import { weatherForecastReducer } from './state/weather-forecast/weather-forecast.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([GeocodeEffects, WeatherForecastEffects]),
    StoreModule.forRoot({
      geocode: geocodeReducer,
      weatherForecast: weatherForecastReducer,
    }),
  ],
})
export class CoreStateModule {}
