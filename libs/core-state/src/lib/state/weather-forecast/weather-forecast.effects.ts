import { TimeTemperature } from '@angular-dev-test-task/api-interfaces';
import { WeatherForecastService } from '@angular-dev-test-task/core-data';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { AppState } from '../app.state';
import * as GeoCodeActions from '../geocode/geocode.actions';
import { selectTimeTemperatureOpt } from '../geocode/geocode.selectors';
import * as WeatherForecastActions from './weather-forecast.actions';

@Injectable()
export class WeatherForecastEffects {
  fetchWeatherForecastData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GeoCodeActions.fetchGeoSuccess),
      withLatestFrom(this.store.select(selectTimeTemperatureOpt)),
      switchMap(([{ lat, lon }, timeTemperatureOpt]) =>
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

  clearWeatherForecast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherForecastActions.clearWeatherForecast),
      concatLatestFrom(() => this.store.select(selectTimeTemperatureOpt)),
      map(([, timeTemperatureOpt]) =>
        WeatherForecastActions.clearWeatherForecastSuccess({
          timeTemperatureOpt,
        })
      )
    )
  );

  constructor(
    private actions$: Actions,
    private weatherForecast: WeatherForecastService,
    private store: Store<AppState>
  ) {}
}
