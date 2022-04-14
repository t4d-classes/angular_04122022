import { Component, OnInit, Input } from '@angular/core';

import { Color } from '../../models/colors';

@Component({
  selector: 'lib-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  @Input()
  colors: Color[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
