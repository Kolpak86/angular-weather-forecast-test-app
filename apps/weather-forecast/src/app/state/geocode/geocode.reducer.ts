import { createReducer, on } from '@ngrx/store';
import { Coordinates } from '../../models';
import { TimeTemperature } from '../../models/time-temperature';
import * as GeocodeActions from './geocode.actions';

export const initialState: Coordinates = {
  lat: '',
  lon: '',
  name: '',
  timeTemperatureOpt: TimeTemperature.hourly,
};

export const geocodeReducer = createReducer(
  initialState,
  on(
    GeocodeActions.fetchGeoSuccess,
    (state, { lat, lon, name, timeTemperatureOpt }) => ({
      ...state,
      lat,
      lon,
      name,
      timeTemperatureOpt,
    })
  ),
  on(GeocodeActions.fetchGeoFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(GeocodeActions.changeDailyHourly, (state, { dailyHourlyOpt }) => ({
    ...state,
    dailyHourlyOpt,
  }))
);
