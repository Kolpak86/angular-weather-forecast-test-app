import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { TimeTemperature } from '../../models/time-temperature';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import * as GeoCodeActions from '../geocode/geocode.actions';
import * as WeatherForecastActions from './weather-forecast.actions';

@Injectable()
export class WeatherForecastEffects {
  fetchWeatherForecastData = createEffect(() =>
    this.actions$.pipe(
      ofType(GeoCodeActions.fetchGeoSuccess),

      switchMap(({ lat, lon, timeTemperatureOpt }) =>
        this.weatherForecast.getForeCast(lat, lon, timeTemperatureOpt).pipe(
          map((info) => {
            if (timeTemperatureOpt === TimeTemperature.daily) {
              return WeatherForecastActions.loadDailyWeatherForecast(info);
            }
            return WeatherForecastActions.loadHourlyWeatherForecast(info);
          }),
          catchError((error) => of(GeoCodeActions.fetchGeoFailure(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private weatherForecast: WeatherForecastService
  ) {}
}
