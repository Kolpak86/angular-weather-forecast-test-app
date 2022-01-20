import {
  TimeTemperature,
  WeatherForecastInfo,
} from '@angular-dev-test-task/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const loadDailyWeatherForecast = createAction(
  '[Table Component] - Load Daily Forecast',
  props<WeatherForecastInfo>()
);
export const loadHourlyWeatherForecast = createAction(
  '[Table Component] - Load Hourly Forecast',
  props<WeatherForecastInfo>()
);

export const clearWeatherForecast = createAction(
  '[Table Component] - Clear Table Data'
);

export const clearWeatherForecastSuccess = createAction(
  '[Table Component] - Clear Table Data Success',
  props<{ timeTemperatureOpt: TimeTemperature }>()
);
