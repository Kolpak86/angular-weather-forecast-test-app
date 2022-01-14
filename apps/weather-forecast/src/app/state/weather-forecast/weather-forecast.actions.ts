import { createAction, props } from '@ngrx/store';
import { WeatherForecastInfo } from '../../models';
import { TimeTemperature } from '../../models/time-temperature';

export const loadWeatherForecast = createAction(
  '[Table Component] - Load Forecast',
  props<WeatherForecastInfo>()
);
