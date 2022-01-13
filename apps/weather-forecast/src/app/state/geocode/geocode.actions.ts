import { createAction, props } from '@ngrx/store';
import { Coordinates } from '../../models';

export const fetchGeo = createAction(
  '[App Component] - Fetched Geo',
  props<{ name: string }>()
);

export const fetchGeoSuccess = createAction(
  '[Weather API] Coordinates Fetched Success',
  props<Coordinates>()
);

export const fetchGeoFailure = createAction(
  '[Weather API] Coordinates Fetched Failure',
  props<{ error: string }>()
);
