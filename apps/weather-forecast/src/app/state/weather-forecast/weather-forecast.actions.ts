import { createAction, props } from '@ngrx/store';
import { WeatherForecastInfo } from '../../models';
import { TimeTemperature } from '../../models/time-temperature';

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
