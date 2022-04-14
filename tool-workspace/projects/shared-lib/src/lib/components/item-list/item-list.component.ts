import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../../models/items';

@Component({
  selector: 'lib-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input()
  items: Item[] | null = [];

  @Input()
  actionText: string = 'Go';

  @Output()
  action = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  doAction(itemId: number) {
    this.action.emit(itemId);
  }

}
