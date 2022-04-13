import { State, Selector, Action, StateContext } from '@ngxs/store';

export class Add {
  static readonly type = '[CalcTool] Add';
  constructor(public value: number) { }
}

export class Subtract {
  static readonly type = '[CalcTool] Subtract';
  constructor(public value: number) { }
}

export class Multiply {
  static readonly type = '[CalcTool] Multiply';
  constructor(public value: number) { }
}

export class Divide {
  static readonly type = '[CalcTool] Divide';
  constructor(public value: number) { }
}

export type HistoryEntry = {
  id: number;
  opName: string;
  opValue: number;
}

export type CalcToolStateModel = {
  result: number;
  history: HistoryEntry[];
};

@State<CalcToolStateModel>({
  name: 'calcTool',
  defaults: {
    result: 0,
    history: [],
  },
})
export class CalcToolState {

  @Selector()
  static result(state: CalcToolStateModel) {
    return state.result;
  }

  @Selector()
  static history(state: CalcToolStateModel) {
    return state.history;
  }  

  @Action(Add)
  add(ctx: StateContext<CalcToolStateModel>, action: Add) {
    
    const state = ctx.getState();
    
    ctx.patchState({
      result: state.result + action.value,
      history: [...state.history, {
        id: Math.max(...state.history.map(entry => entry.id), 0) + 1,
        opName: 'Add',
        opValue: action.value,
      }],
    });
  }

  @Action(Subtract)
  subtract(ctx: StateContext<CalcToolStateModel>, action: Subtract) {

    const state = ctx.getState();
    
    ctx.patchState({
      result: state.result - action.value,
      history: [...state.history, {
        id: Math.max(...state.history.map(entry => entry.id), 0) + 1,
        opName: 'Subtract',
        opValue: action.value,
      }],
    });
  }

  @Action(Multiply)
  multiply(ctx: StateContext<CalcToolStateModel>, action: Multiply) {

    const state = ctx.getState();
    
    ctx.patchState({
      result: state.result * action.value,
      history: [...state.history, {
        id: Math.max(...state.history.map(entry => entry.id), 0) + 1,
        opName: 'Multiply',
        opValue: action.value,
      }],
    });
  }

  @Action(Divide)
  divide(ctx: StateContext<CalcToolStateModel>, action: Divide) {

    const state = ctx.getState();
    
    ctx.patchState({
      result: state.result / action.value,
      history: [...state.history, {
        id: Math.max(...state.history.map(entry => entry.id), 0) + 1,
        opName: 'Divide',
        opValue: action.value,
      }],
    });
  }


}