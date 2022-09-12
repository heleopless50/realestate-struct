import { Property } from "../models/property"

export interface PropertyState {
  PropertyItems:Property[]
}

export const initialState  = {
  PropertyItems : []
}
