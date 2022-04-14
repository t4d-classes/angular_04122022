import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  CalcToolState, HistoryEntry, Add, Subtract,
  Multiply, Divide, Clear, DeleteHistoryEntry,
} from '../../calc-tool-lib.state';

@Component({
  selector: 'lib-calc-home',
  templateUrl: './calc-home.component.html',
  styleUrls: ['./calc-home.component.css']
})
export class CalcHomeComponent implements OnInit {

  @Select(CalcToolState.result)
  result$!: Observable<number>;

  @Select(CalcToolState.history)
  history$!: Observable<HistoryEntry[]>;

  numInput = new FormControl('');

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  add() {
    this.store.dispatch(new Add(this.numInput.value));
  }

  subtract() {
    this.store.dispatch(new Subtract(this.numInput.value));
  }

  multiply() {
    this.store.dispatch(new Multiply(this.numInput.value));
  }

  divide() {
    this.store.dispatch(new Divide(this.numInput.value));
  }

  clear() {
    this.store.dispatch(new Clear());
    this.numInput.setValue(0);
  }

  deleteHistoryEntry(entryId: number) {
    this.store.dispatch(new DeleteHistoryEntry(entryId));
  }

}
