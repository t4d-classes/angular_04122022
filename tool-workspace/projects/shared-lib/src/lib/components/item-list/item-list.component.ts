import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input()
  items: string[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
