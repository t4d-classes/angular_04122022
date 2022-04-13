import { State, Selector, Action, StateContext } from '@ngxs/store';

export class Add {
  static readonly type = '[CalcTool] Add';
  constructor(public value: number) { }
}

export class Subtract {
  static readonly type = '[CalcTool] Subtract';
  constructor(public value: number) { }
}

export type CalcToolStateModel = {
  result: number;
};

@State<CalcToolStateModel>({
  name: 'calcTool',
  defaults: {
    result: 0,
  },
})
export class CalcToolState {

  @Selector()
  static result(state: CalcToolStateModel) {
    return state.result;
  }

  @Action(Add)
  add(ctx: StateContext<CalcToolStateModel>, action: Add) {
    
    const state = ctx.getState();
    
    ctx.patchState({
      result: state.result + action.value,
    });
  }

  @Action(Subtract)
  subtract(ctx: StateContext<CalcToolStateModel>, action: Subtract) {

    const state = ctx.getState();
    
    ctx.patchState({
      result: state.result - action.value,
    });
  }



}