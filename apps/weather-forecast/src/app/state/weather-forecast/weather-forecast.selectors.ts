import { createSelector } from '@ngrx/store';
import { DailyTemperature, DataTable, WeatherForecastInfo } from '../../models';
import { TimeTemperature } from '../../models/time-temperature';
import { AppState } from '../app.state';

export const selectWeatherForecast = (state: AppState) => state.weatherForecast;
export const selectHourCity = (state: AppState) => state.geocode.hourlyName;
export const selectDayCity = (state: AppState) => state.geocode.dailyName;
export const selectTimeTemperatureOpt = (state: AppState) =>
  state.geocode.timeTemperatureOpt;

export const selectWeatherForecastInfo = createSelector(
  selectWeatherForecast,
  selectDayCity,
  selectHourCity,
  selectTimeTemperatureOpt,
  (
    weatherForecast: WeatherForecastInfo,
    cityDay: string,
    cityHour: string,
    dailyHourly: TimeTemperature
  ) => {
    let dataTable: DataTable = { column: [], row: [] };

    // I believe this is a backend logic
    const temperatures = [];

    if (dailyHourly === TimeTemperature.daily) {
      if (weatherForecast.daily?.length > 0) {
        for (let i = 0; i < 7; i++) {
          temperatures.push(weatherForecast.daily[i]);
        }

        dataTable = { column: ['City'], row: [[cityDay]] };
        temperatures.forEach((temp) => {
          dataTable.column.push(temp.dt);
          dataTable.row[0].push((temp as DailyTemperature).temp.day);
        });
      }
    } else {
      if (weatherForecast.hourly?.length > 0) {
        for (let i = 0; i <= 21; i += 3) {
          temperatures.push(weatherForecast.hourly[i]);
        }

        dataTable = { column: ['City'], row: [[cityHour]] };
        temperatures.forEach((temp) => {
          dataTable.column.push(temp.dt);
          dataTable.row[0].push(temp.temp as number);
        });
      }
    }
    return dataTable;
  }
);
