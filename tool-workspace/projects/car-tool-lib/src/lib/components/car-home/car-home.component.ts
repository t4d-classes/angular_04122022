import { Component, OnInit } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'lib-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  cars: Car[] = [];

  editCarId: number = -1;

  constructor() { }

  ngOnInit() {
  }

  doEditCar(carId: number) {
  }

  doCancelCar() {
  }

  doAppendCar(car: Car) {
  }

  doReplaceCar(car: Car) {
  }

  doRemoveCar(carId: number) {
  }

}
