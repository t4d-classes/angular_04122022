import { State, Selector, Action, StateContext } from '@ngxs/store';

export class Add {
  static readonly type = '[CalcTool] Add';
  constructor(public value: number) { }
}

export class Subtract {
  static readonly type = '[CalcTool] Subtract';
  constructor(public value: number) { }
}

export type CalcToolAppState = {
  result: number;
};

@State<CalcToolAppState>({
  name: 'calcTool',
  defaults: {
    result: 0,
  },
})
export class CalcToolState {

  @Selector()
  static result(state: CalcToolAppState) {
    return state.result;
  }

  @Action(Add)
  add(ctx: StateContext<CalcToolAppState>, action: Add) {
    
    const state = ctx.getState();
    
    ctx.patchState({
      result: state.result + action.value,
    });
  }

  @Action(Subtract)
  subtract(ctx: StateContext<CalcToolAppState>, action: Subtract) {

    const state = ctx.getState();
    
    ctx.patchState({
      result: state.result - action.value,
    });
  }



}