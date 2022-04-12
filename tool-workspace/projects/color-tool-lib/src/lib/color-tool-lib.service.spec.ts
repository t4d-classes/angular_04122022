import { TestBed } from '@angular/core/testing';

import { ColorToolLibService } from './color-tool-lib.service';

describe('ColorToolLibService', () => {
  let service: ColorToolLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorToolLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
