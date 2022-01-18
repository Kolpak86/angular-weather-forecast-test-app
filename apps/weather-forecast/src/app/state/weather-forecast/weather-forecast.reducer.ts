import { createReducer, on } from '@ngrx/store';
import { WeatherForecastInfo } from '../../models';
import { TimeTemperature } from '../../models/time-temperature';
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
    WeatherForecastActions.clearWeatherForecast,
    (state, { timeTemperatureOpt }) => {
      if (timeTemperatureOpt === TimeTemperature.hourly) {
        return { ...state, hourly: [] };
      }
      return { ...state, daily: [] };
    }
  )
);
