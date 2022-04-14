import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-tool-header',
  templateUrl: './tool-header.component.html',
  styleUrls: ['./tool-header.component.css']
})
export class ToolHeaderComponent implements OnInit {


  @Input()
  headerText = 'The Tool';

  constructor() { }

  ngOnInit(): void {
  }

}
