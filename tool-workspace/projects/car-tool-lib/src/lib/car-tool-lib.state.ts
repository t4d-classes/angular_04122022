import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { Car, NewCar } from './models/cars';
import { CarsDataService } from './services/cars-data.service';

export class RefreshCars {
  static readonly type = '[CarTool] Refresh Cars';
}

export class AppendCar {
  static readonly type = '[CarTool] Append Car';
  constructor(public car: NewCar) { }
}

export class ReplaceCar {
  static readonly type = '[CarTool] Replace Car';
  constructor(public car: Car) { }
}

export class RemoveCar {
  static readonly type = '[CarTool] Remove Car';
  constructor(public carId: number) { }
}

export class EditCar {
  static readonly type = '[CarTool] Edit Car';
  constructor(public carId: number) { }
}

export class CancelCar {
  static readonly type = '[CarTool] Cancel Car';
}


export type CarToolStateModel = {
  cars: Car[];
  editCarId: number;
};

@State<CarToolStateModel>({
  name: 'carTool',
  defaults: {
    cars: [],
    editCarId: -1,
  },
})
@Injectable()
export class CarToolState {

  @Selector()
  static cars(state: CarToolStateModel) {
    return state.cars;
  }

  @Selector()
  static editCarId(state: CarToolStateModel) {
    return state.editCarId;
  }

  constructor(private carsData: CarsDataService) { }

  @Action(RefreshCars)
  refreshCars(ctx: StateContext<CarToolStateModel>) {

    return this.carsData.all().pipe(
      tap(cars => {
        ctx.patchState({ cars, editCarId: -1, });
      }),
    );

  }

  @Action(AppendCar)
  appendCar(ctx: StateContext<CarToolStateModel>, action: AppendCar) {

    return this.carsData.append(action.car).pipe(
      tap(() => {
        ctx.dispatch(new RefreshCars());
      }),
    );

  }

  @Action(ReplaceCar)
  replaceCar(ctx: StateContext<CarToolStateModel>, action: ReplaceCar) {

    return this.carsData.replace(action.car).pipe(
      tap(() => {
        ctx.dispatch(new RefreshCars());
      }),
    );

  } 
  
  @Action(RemoveCar)
  removeCar(ctx: StateContext<CarToolStateModel>, action: RemoveCar) {

    return this.carsData.remove(action.carId).pipe(
      tap(() => {
        ctx.dispatch(new RefreshCars());
      }),
    );

  }   

  @Action(EditCar)
  editCar(ctx: StateContext<CarToolStateModel>, action: EditCar) {

    ctx.patchState({
      editCarId: action.carId,
    });

  }

  @Action(CancelCar)
  cancelCar(ctx: StateContext<CarToolStateModel>) {

    ctx.patchState({
      editCarId: -1,
    });

  }  

}