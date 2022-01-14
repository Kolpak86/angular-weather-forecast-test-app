import { TimeTemperature } from './time-temperature';

export interface Coordinates {
  lat: string;
  lon: string;
  name: string;
  hourlyName: string;
  dailyName: string;
  timeTemperatureOpt: TimeTemperature;
}

export interface WeatherForecastInfo {
  daily: HourlyDailyTemperature[];
  hourly: HourlyDailyTemperature[];
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

export type HourlyDailyTemperature = HourlyTemperature | DailyTemperature;
