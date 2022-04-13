import { TestBed } from '@angular/core/testing';

import { CalcToolLibService } from './calc-tool-lib.service';

describe('CalcToolLibService', () => {
  let service: CalcToolLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcToolLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
