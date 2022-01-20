import {
  TimeTemperature,
  WeatherForecastInfo,
} from '@angular-dev-test-task/api-interfaces';
import { createReducer, on } from '@ngrx/store';
import * as WeatherForecastActions from './weather-forecast.actions';

export const initialState: WeatherForecastInfo = {
  daily: [],
  hourly: [],
};

export const weatherForecastReducer = createReducer(
  initialState,

  on(WeatherForecastActions.loadDailyWeatherForecast, (state, { daily }) => ({
    ...state,
    daily,
  })),
  on(WeatherForecastActions.loadHourlyWeatherForecast, (state, { hourly }) => ({
    ...state,
    hourly,
  })),
  on(
    WeatherForecastActions.clearWeatherForecastSuccess,
    (state, { timeTemperatureOpt }) => {
      if (timeTemperatureOpt === TimeTemperature.hourly) {
        return { ...state, hourly: [] };
      }
      return { ...state, daily: [] };
    }
  )
);
