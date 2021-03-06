import { Action } from "redux";

// Structure of Car
export interface Car {
  id: Number;
  manufacturer: String;
  make: String;
  model: String;
  year: Number;
}

// Structure of Application State
export interface ApplicationState {
  cars: Car[];
}

// Structure of Store Action
export interface StoreAction<T = String, V = any> extends Action<T> {
  payload?: V;
}
