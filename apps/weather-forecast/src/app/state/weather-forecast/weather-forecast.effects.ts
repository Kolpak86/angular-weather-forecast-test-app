import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { TimeTemperature } from '../../models/time-temperature';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { AppState } from '../app.state';
import * as GeoCodeActions from '../geocode/geocode.actions';
import * as WeatherForecastActions from './weather-forecast.actions';

@Injectable()
export class WeatherForecastEffects {
  fetchWeatherForecastData = createEffect(() =>
    this.actions$.pipe(
      ofType(GeoCodeActions.fetchGeoSuccess),
      withLatestFrom(
        this.store.select((state) => state.geocode.timeTemperatureOpt)
      ),
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

  constructor(
    private actions$: Actions,
    private weatherForecast: WeatherForecastService,
    private store: Store<AppState>
  ) {}
}
