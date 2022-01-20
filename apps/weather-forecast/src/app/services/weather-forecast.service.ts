import {
  GeoInfo,
  TimeTemperature,
  WeatherForecastInfo,
} from '@angular-dev-test-task/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GeoMapperService } from './geo-mapper.service';

export type HourDayOpt = 'hourly | daily';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
  private apiKey = '010721642521f31b0fbc8c3831d45951';
  private weatherApi = 'https://api.openweathermap.org/';

  constructor(private http: HttpClient, private geoMapper: GeoMapperService) {}

  getGeocode(city: string): Observable<GeoInfo | null> {
    return this.http
      .get<GeoInfo[]>(
        `${this.weatherApi}geo/1.0/direct?q=${city}&limit=1&appid=${this.apiKey}`
      )
      .pipe(map((coordinates) => this.geoMapper.toClient(coordinates)));
  }

  getForeCast(
    lat: string,
    lon: string,
    exclude: TimeTemperature
  ): Observable<WeatherForecastInfo> {
    const excludeValue =
      exclude === TimeTemperature.hourly
        ? TimeTemperature.daily
        : TimeTemperature.hourly;
    return this.http.get<WeatherForecastInfo>(
      `${this.weatherApi}data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,${excludeValue},alerts&appid=${this.apiKey}&units=metric`
    );
  }
}
