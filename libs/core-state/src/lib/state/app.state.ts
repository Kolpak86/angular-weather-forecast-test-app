import {
  CityTimeTemperature,
  WeatherForecastInfo,
} from '@angular-dev-test-task/api-interfaces';

export interface AppState {
  weatherForecast: WeatherForecastInfo;
  geocode: CityTimeTemperature;
}
