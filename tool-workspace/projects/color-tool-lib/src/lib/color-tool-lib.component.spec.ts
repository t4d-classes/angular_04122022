import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorToolLibComponent } from './color-tool-lib.component';

describe('ColorToolLibComponent', () => {
  let component: ColorToolLibComponent;
  let fixture: ComponentFixture<ColorToolLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorToolLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorToolLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
