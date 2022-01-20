import {
  CityTimeTemperature,
  TimeTemperature,
} from '@angular-dev-test-task/api-interfaces';
import { createReducer, on } from '@ngrx/store';
import * as GeocodeActions from './geocode.actions';

export const initialState: CityTimeTemperature = {
  name: '',
  hourlyName: '',
  dailyName: '',
  timeTemperatureOpt: TimeTemperature.hourly,
};

export const geocodeReducer = createReducer(
  initialState,
  on(GeocodeActions.fetchGeoSuccess, (state, { name, timeTemperatureOpt }) => {
    const city =
      timeTemperatureOpt === TimeTemperature.hourly
        ? { hourlyName: name }
        : { dailyName: name };
    return {
      ...state,
      name: name,
      timeTemperatureOpt,
      ...city,
    };
  }),
  on(GeocodeActions.fetchGeoFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(GeocodeActions.changeDailyHourly, (state, { timeTemperatureOpt }) => ({
    ...state,
    timeTemperatureOpt,
  }))
);
