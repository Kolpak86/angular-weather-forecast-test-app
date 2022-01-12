import { Injectable } from '@angular/core';
import { Coordinates } from '../models';

@Injectable({
  providedIn: 'root',
})
export class GeoMapperService {
  toClient(coordinates: Coordinates[]): Coordinates {
    return {
      lat: coordinates[0].lat,
      lon: coordinates[0].lon,
    };
  }
}
