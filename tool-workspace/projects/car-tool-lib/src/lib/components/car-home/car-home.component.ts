import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppendCar, EditCar, RefreshCars, CarToolState, RemoveCar, CancelCar, ReplaceCar } from '../../car-tool-lib.state';

import { Car } from '../../models/cars';

@Component({
  selector: 'lib-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  @Select(CarToolState.cars)
  cars$!: Observable<Car[]>;

  @Select(CarToolState.editCarId)
  editCarId$!: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new RefreshCars());
  }

  doEditCar(carId: number) {
    this.store.dispatch(new EditCar(carId));
  }

  doCancelCar() {
    this.store.dispatch(new CancelCar());
  }

  doAppendCar(car: Car) {
    this.store.dispatch(new AppendCar(car));
  }

  doReplaceCar(car: Car) {
    this.store.dispatch(new ReplaceCar(car));
  }

  doRemoveCar(carId: number) {
    this.store.dispatch(new RemoveCar(carId));
  }

}
