import { Injectable } from '@angular/core';
import { Coordinates } from '../models';

@Injectable({
  providedIn: 'root',
})
export class GeoMapperService {
  toClient(coordinates: Coordinates[]): Coordinates {
    const { lat, lon, name } = coordinates[0];
    return {
      lat,
      lon,
      name,
    } as Coordinates;
  }
}
