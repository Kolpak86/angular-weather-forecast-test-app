import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Coordinates } from '../models/coordinates';
import { GeoMapperService } from './geo-mapper.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
  private apiKey = '010721642521f31b0fbc8c3831d45951';
  private weatherApi = 'https://api.openweathermap.org/';

  constructor(private http: HttpClient, private geoMapper: GeoMapperService) {}

  getGeocode(city: string): Observable<Coordinates> {
    return this.http
      .get<Coordinates[]>(
        `${this.weatherApi}geo/1.0/direct?q=${city}&limit=1&appid=${this.apiKey}`
      )
      .pipe(map((coordinates) => this.geoMapper.toClient(coordinates)));
  }

  getForeCast(
    lat: string,
    lon: string,
    exclude: 'hourly | daily'
  ): Observable<any> {
    return this.http.get(
      `${this.weatherApi}data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,${exclude},alerts&appid=${this.apiKey}`
    );
  }
}
