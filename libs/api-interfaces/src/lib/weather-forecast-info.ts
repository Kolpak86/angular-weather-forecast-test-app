import { TimeTemperature } from './time-temperature';

export interface GeoInfo {
  name: string;
  lat: string;
  lon: string;
  timeTemperatureOpt: TimeTemperature;
}

export interface WeatherForecastInfo {
  daily: DailyTemperature[];
  hourly: HourlyTemperature[];
}

export interface Temperature {
  dt: number;
}

export interface HourlyTemperature extends Temperature {
  temp: number;
}

export interface DailyTemperature extends Temperature {
  temp: { day: number };
}
