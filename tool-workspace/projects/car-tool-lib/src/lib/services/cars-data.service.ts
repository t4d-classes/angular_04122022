import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car, NewCar } from '../models/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsDataService {

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get<Car[]>('http://localhost:3060/cars');
  }

  append(car: NewCar) {
    return this.httpClient.post<Car>('http://localhost:3060/cars', car);
  }

  replace(car: Car) {
    const encodedCarId = encodeURIComponent(car.id);
    const url = `http://localhost:3060/cars/${encodedCarId}`;    
    return this.httpClient.put<Car>(url, car);
  }
  
  remove(carId: number) {
    const encodedCarId = encodeURIComponent(carId);
    const url = `http://localhost:3060/cars/${encodedCarId}`;
    return this.httpClient.delete<void>(url);
  }

}
