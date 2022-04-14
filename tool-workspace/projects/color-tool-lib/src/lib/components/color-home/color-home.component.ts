import { Component, OnInit } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppendColor, ColorToolState, RefreshColors, RemoveColor } from '../../color-tool-lib.state';
import { Color, NewColor } from '../../models/colors';
import { Item } from 'shared-lib';

@Component({
  selector: 'lib-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  @Select(ColorToolState.colors)
  colors$!: Observable<Item[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new RefreshColors());
  }

  addColor(color: NewColor) {
    this.store.dispatch(new AppendColor(color));
  }

  deleteColor(colorId: number) {
    this.store.dispatch(new RemoveColor(colorId));
  }

}
