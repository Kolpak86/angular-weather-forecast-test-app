import { createReducer, on } from '@ngrx/store';
import { Coordinates } from '../../models';
import * as GeocodeActions from './geocode.actions';

export const initialState: Coordinates = {
  lat: '',
  lon: '',
};

export const geocodeReducer = createReducer(
  initialState,
  on(GeocodeActions.fetchGeoSuccess, (state, { lat, lon }) => ({
    ...state,
    lat,
    lon,
  })),
  on(GeocodeActions.fetchGeoFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
