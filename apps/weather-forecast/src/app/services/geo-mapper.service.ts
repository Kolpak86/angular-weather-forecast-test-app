import { Injectable } from '@angular/core';
import { GeoInfo } from '../models';

@Injectable({
  providedIn: 'root',
})
export class GeoMapperService {
  toClient(coordinates: GeoInfo[]): GeoInfo | null {
    if (coordinates.length === 0) {
      return null;
    }
    const { lat, lon, name } = coordinates[0];
    return {
      lat,
      lon,
      name,
    } as GeoInfo;
  }
}
