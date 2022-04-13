import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  // colors = [
  //   { id: 1, name: 'red', hexcode: 'ff0000' },
  //   { id: 2, name: 'green', hexcode: '00ff00' },
  //   { id: 3, name: 'blue', hexcode: '0000ff' }
  // ];

  // sortField = 'name';
  // sortDir = 'asc';

  constructor() { }

  ngOnInit(): void {
  }

  // addColor() {

  //   this.colors = [
  //     ...this.colors,
  //     { /* some new color */ }
  //   ];

  // }

}
