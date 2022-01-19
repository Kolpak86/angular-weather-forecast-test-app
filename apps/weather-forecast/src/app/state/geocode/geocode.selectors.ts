import { AppState } from '../app.state';

export const selectHourCity = (state: AppState) => state.geocode.hourlyName;
export const selectDayCity = (state: AppState) => state.geocode.dailyName;
export const selectTimeTemperatureOpt = (state: AppState) =>
  state.geocode.timeTemperatureOpt;
