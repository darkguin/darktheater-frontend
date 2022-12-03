import { TestBed } from '@angular/core/testing';

import { MovieGuard } from './movie.guard';

describe('MovieGuard', () => {
  let guard: MovieGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MovieGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
