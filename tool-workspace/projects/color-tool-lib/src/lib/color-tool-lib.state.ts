import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { Color, NewColor } from './models/colors';
import { ColorsDataService } from './services/colors-data.service';

export class RefreshColors {
  static readonly type = '[ColorTool] Refresh Colors';
}

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
    colors: [],
  },
})
@Injectable()
export class ColorToolState {

  @Selector()
  static colors(state: ColorToolStateModel) {
    return state.colors.map(color => {
      return `${color.name} ${color.hexcode}`;
    });
  }

  constructor(private colorsData: ColorsDataService) { }

  @Action(RefreshColors)
  refreshColors(ctx: StateContext<ColorToolStateModel>) {

    return this.colorsData.all().pipe(
      tap(colors => {
        ctx.patchState({ colors });
      }),
    );

  }

  @Action(AppendColor)
  appendColor(ctx: StateContext<ColorToolStateModel>, action: AppendColor) {

    return this.colorsData.append(action.color).pipe(
      tap(() => {
        ctx.dispatch(new RefreshColors());
      }),
    );

  }

}