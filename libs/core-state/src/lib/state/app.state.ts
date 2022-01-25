import { WeatherForecastInfo } from '@angular-dev-test-task/api-interfaces';
import { GeoState } from './geocode/geocode.reducer';

export interface AppState {
  weatherForecast: WeatherForecastInfo;
  geocode: GeoState;
}
