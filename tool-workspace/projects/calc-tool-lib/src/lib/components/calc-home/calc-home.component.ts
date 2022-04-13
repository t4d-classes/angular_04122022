import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Add, CalcToolStateModel, CalcToolState, Subtract } from '../../calc-tool-lib.state';

@Component({
  selector: 'lib-calc-home',
  templateUrl: './calc-home.component.html',
  styleUrls: ['./calc-home.component.css']
})
export class CalcHomeComponent implements OnInit {

  // @Select((state: { calcTool: CalcToolStateModel }) => state.calcTool.result)
  @Select(CalcToolState.result)
  result$!: Observable<number>;

  numInput = new FormControl('');

  constructor(private store: Store) {
    // this.result$ = this.store.select(
    //   (state: { calcTool: CalcToolStateModel }) => state.calcTool.result);
  }

  ngOnInit(): void {
  }

  add() {
    this.store.dispatch(new Add(this.numInput.value));
    // this.numInput.setValue(0);
  }

  subtract() {
    this.store.dispatch(new Subtract(this.numInput.value));
    // this.numInput.setValue(0);
  }

}
