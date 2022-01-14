import { Coordinates, WeatherForecastInfo } from '../models';

export interface AppState {
  weatherForecast: WeatherForecastInfo;
  geocode: Coordinates;
}
