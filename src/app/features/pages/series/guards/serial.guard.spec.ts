import { TestBed } from '@angular/core/testing';

import { SerialGuard } from './serial.guard';

describe('SerialGuard', () => {
  let guard: SerialGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SerialGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
