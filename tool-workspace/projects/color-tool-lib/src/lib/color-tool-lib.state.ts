import { State, Selector, Action, StateContext } from '@ngxs/store';

import { Color, NewColor } from './models/colors';

export class AppendColor {
  static readonly type = '[ColorTool] Append Color';
  constructor(public color: NewColor) { }
}

export type ColorToolStateModel = {
  colors: Color[];
};

@State<ColorToolStateModel>({
  name: 'colorTool',
  defaults: {
    colors: [
      { id: 1, name: 'red', hexcode: 'ff0000' },
      { id: 2, name: 'green', hexcode: '00ff00' },
      { id: 3, name: 'blue', hexcode: '0000ff' },
    ],
  },
})
export class ColorToolState {

  @Selector()
  static colors(state: ColorToolStateModel) {
    return state.colors.map(color => {
      return `${color.name} ${color.hexcode}`;
    });
  }

  @Action(AppendColor)
  appendColor(ctx: StateContext<ColorToolStateModel>, action: AppendColor) {
    
    const state = ctx.getState();
    
    ctx.patchState({
      colors: [...state.colors, {
        id: Math.max(...state.colors.map(c => c.id), 0) + 1,
        ...action.color,
      }],
    });
  }

}