import { createAction, props } from '@ngrx/store';
import { WeatherForecastInfo } from '../../models';

export const loadDailyWeatherForecast = createAction(
  '[Table Component] - Load Daily Forecast',
  props<WeatherForecastInfo>()
);
export const loadHourlyWeatherForecast = createAction(
  '[Table Component] - Load Hourly Forecast',
  props<WeatherForecastInfo>()
);
