import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcToolLibComponent } from './calc-tool-lib.component';

describe('CalcToolLibComponent', () => {
  let component: CalcToolLibComponent;
  let fixture: ComponentFixture<CalcToolLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcToolLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcToolLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
