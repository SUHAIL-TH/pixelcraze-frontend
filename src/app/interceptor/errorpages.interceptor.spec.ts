import { TestBed } from '@angular/core/testing';

import { ErrorpagesInterceptor } from './errorpages.interceptor';

describe('ErrorpagesInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorpagesInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorpagesInterceptor = TestBed.inject(ErrorpagesInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
