import { createAction, props } from '@ngrx/store';
import { GeoInfo } from '../../models';
import { TimeTemperature } from '../../models/time-temperature';

export const fetchGeo = createAction(
  '[App Component] - Fetched Geo',
  props<{ name: string; timeTemperatureOpt: TimeTemperature }>()
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
