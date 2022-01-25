import { TimeTemperature } from '@angular-dev-test-task/api-interfaces';
import { createReducer, on } from '@ngrx/store';
import * as GeocodeActions from './geocode.actions';

export interface GeoState {
  hourlyCity: string;
  dailyCity: string;
  timeTemperatureOpt: TimeTemperature;
}

export const initialState: GeoState = {
  hourlyCity: '',
  dailyCity: '',
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
