import { createReducer, on } from '@ngrx/store';
import { WeatherForecastInfo } from '../../models';
import * as WeatherForecastActions from './weather-forecast.actions';

export const initialState: WeatherForecastInfo = {
  daily: [],
  hourly: [],
};

export const weatherForecastReducer = createReducer(
  initialState,
  on(WeatherForecastActions.loadWeatherForecast, (state, info) => ({
    ...state,
    daily: info.daily,
    hourly: info.hourly,
  }))
);
