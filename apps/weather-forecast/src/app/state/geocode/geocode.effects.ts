import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, mergeMap } from 'rxjs';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import * as GeoCodeActions from './geocode.actions';

@Injectable()
export class GeocodeEffects {
  fetchCoordinates = createEffect(() =>
    this.actions$.pipe(
      ofType(GeoCodeActions.fetchGeo),
      mergeMap((action) =>
        this.weatherForecast.getGeocode(action.name).pipe(
          map((coordinates) => GeoCodeActions.fetchGeoSuccess(coordinates)),
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
