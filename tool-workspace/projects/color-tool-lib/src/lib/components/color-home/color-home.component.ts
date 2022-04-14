import { Component, OnInit } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppendColor, ColorToolState } from '../../color-tool-lib.state';
import { Color, NewColor } from '../../models/colors';

@Component({
  selector: 'lib-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  @Select(ColorToolState.colors)
  colors$!: Observable<string[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addColor(color: NewColor) {
    this.store.dispatch(new AppendColor(color));
  }

}
