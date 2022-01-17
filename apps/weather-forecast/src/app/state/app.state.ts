import { CityTimeTemperature, WeatherForecastInfo } from '../models';

export interface AppState {
  weatherForecast: WeatherForecastInfo;
  geocode: CityTimeTemperature;
}
