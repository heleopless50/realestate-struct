import { Injectable } from '@angular/core';
import { Property } from '../models/property';
import { initialState, PropertyState } from './Property-state';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class PropertyStoreService extends StoreService<PropertyState> {

  addItem(PropertyItemAdd: Property) {
    const newState = {
      PropertyItems: ([] as Property[]).concat(this.state.PropertyItems,PropertyItemAdd)

    };


    this.setState(newState)

  }

  constructor() {
    super(initialState);
  }
}
