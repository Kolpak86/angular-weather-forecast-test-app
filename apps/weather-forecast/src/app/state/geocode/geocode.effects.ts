import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { AppState } from '../app.state';
import * as GeoCodeActions from './geocode.actions';

@Injectable()
export class GeocodeEffects {
  fetchCoordinates = createEffect(() =>
    this.actions$.pipe(
      ofType(GeoCodeActions.fetchGeo),
      withLatestFrom(
        this.store.select((state) => state.geocode.timeTemperatureOpt)
      ),
      switchMap(([action, timeTemperatureOpt]) =>
        this.weatherForecast.getGeocode(action.name).pipe(
          map((coordinates) =>
            GeoCodeActions.fetchGeoSuccess({
              ...coordinates,
              timeTemperatureOpt,
            })
          ),
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
