import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { AppState } from '../app.state';
import * as GeoCodeActions from './geocode.actions';
import * as WeatherForecastActions from '../weather-forecast/weather-forecast.actions';
import { selectTimeTemperatureOpt } from './geocode.selectors';
import { WeatherForecastService } from '@angular-dev-test-task/core-data';

@Injectable()
export class GeocodeEffects {
  fetchCoordinates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GeoCodeActions.fetchGeo),
      withLatestFrom(this.store.select(selectTimeTemperatureOpt)),
      switchMap(([action, timeTemperatureOpt]) =>
        this.weatherForecast.getGeocode(action.name).pipe(
          map((coordinates) => {
            if (coordinates) {
              return GeoCodeActions.fetchGeoSuccess({
                ...coordinates,
                timeTemperatureOpt,
              });
            }
            return WeatherForecastActions.clearWeatherForecastSuccess({
              timeTemperatureOpt,
            });
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
