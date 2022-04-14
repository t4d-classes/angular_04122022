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

export class Clear {
  static readonly type = '[CalcTool] Clear';
}

export class DeleteHistoryEntry {
  static readonly type = '[CalcTool] Delete History Entry';
  constructor(public entryId: number) { }
}


export type HistoryEntry = {
  id: number;
  opName: string;
  opValue: number;
}

export type CalcToolStateModel = {
  history: HistoryEntry[];
};

@State<CalcToolStateModel>({
  name: 'calcTool',
  defaults: {
    history: [],
  },
})
export class CalcToolState {

  @Selector()
  static result(state: CalcToolStateModel) {
    return state.history.reduce((result, entry) => {
      switch(entry.opName) {
        case 'Add':
          return result + entry.opValue;
        case 'Subtract':
          return result - entry.opValue;
        case 'Multiply':
          return result * entry.opValue;
        case 'Divide':
          return result / entry.opValue;
        default:
          return result;
      }
    }, 0);
  }

  @Selector()
  static history(state: CalcToolStateModel) {
    return state.history;
  }  

  @Action(Add)
  add(ctx: StateContext<CalcToolStateModel>, action: Add) {
    
    const state = ctx.getState();
    
    ctx.patchState({
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
      history: [...state.history, {
        id: Math.max(...state.history.map(entry => entry.id), 0) + 1,
        opName: 'Divide',
        opValue: action.value,
      }],
    });
  }

  @Action(Clear)
  clear(ctx: StateContext<CalcToolStateModel>) {

    const state = ctx.getState();
    
    ctx.patchState({
      history: [],
    });
  }

  @Action(DeleteHistoryEntry)
  deleteHistoryEntry(ctx: StateContext<CalcToolStateModel>, action: DeleteHistoryEntry) {

    const state = ctx.getState();

    const newHistory = [...state.history];

    const historyEntryIndex = newHistory.findIndex(
      historyEntry => historyEntry.id === action.entryId);

    newHistory.splice(historyEntryIndex, 1);
    
    ctx.patchState({
      history: newHistory,
    });
  }

}