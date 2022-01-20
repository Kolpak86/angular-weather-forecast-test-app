import {
  GeoInfo,
  TimeTemperature,
} from '@angular-dev-test-task/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const fetchGeo = createAction(
  '[App Component] - Fetched Geo',
  props<{ name: string }>()
);

export const fetchGeoSuccess = createAction(
  '[Weather API] Coordinates Fetched Success',
  props<GeoInfo>()
);

export const fetchGeoFailure = createAction(
  '[Weather API] Coordinates Fetched Failure',
  props<{ error: string }>()
);

export const changeDailyHourly = createAction(
  '[Form Component] - Changed option',
  props<{ timeTemperatureOpt: TimeTemperature }>()
);
