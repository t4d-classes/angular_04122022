import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Color, NewColor } from '../../models/colors';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  @Input()
  buttonText = "Submit Color";

  @Output()
  submitColorForm = new EventEmitter<NewColor>();

  colorForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  // private fb: FormBuilder;

  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  ngOnInit(): void {
    this.colorForm = this.fb.group({
      name: '',
      hexcode: '',
    });
  }

  doSubmitColorForm() {
    this.submitColorForm.emit(this.colorForm.value);

    this.colorForm.reset();
  }

}
