import { AppState } from '../app.state';

export const selectHourCity = (state: AppState) => state.geocode.hourlyCity;
export const selectDayCity = (state: AppState) => state.geocode.dailyCity;
export const selectTimeTemperatureOpt = (state: AppState) =>
  state.geocode.timeTemperatureOpt;
