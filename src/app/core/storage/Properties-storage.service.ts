import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root',
})
export class PropertysStorageService {
  $PropertyDb: BehaviorSubject<Property[]> = new BehaviorSubject<Property[]>(
    []
  );

  PropertysDb: Property[] = [];

  constructor() {}
}
