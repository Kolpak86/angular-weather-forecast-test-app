import { createReducer, on } from '@ngrx/store';
import { Coordinates } from '../../models';
import { TimeTemperature } from '../../models/time-temperature';
import * as GeocodeActions from './geocode.actions';

export const initialState: Coordinates = {
  lat: '',
  lon: '',
  name: '',
  hourlyName: '',
  dailyName: '',
  timeTemperatureOpt: TimeTemperature.hourly,
};

export const geocodeReducer = createReducer(
  initialState,
  on(
    GeocodeActions.fetchGeoSuccess,
    (state, { lat, lon, name, timeTemperatureOpt }) => {
      const city =
        timeTemperatureOpt === TimeTemperature.hourly
          ? { hourlyName: name }
          : { dailyName: name };
      return {
        ...state,
        lat,
        lon,
        name: name,
        timeTemperatureOpt,
        ...city,
      };
    }
  ),
  on(GeocodeActions.fetchGeoFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(GeocodeActions.changeDailyHourly, (state, { timeTemperatureOpt }) => ({
    ...state,
    timeTemperatureOpt,
  }))
);
