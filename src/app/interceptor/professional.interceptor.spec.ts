import { TestBed } from '@angular/core/testing';

import { ProfessionalInterceptor } from './professional.interceptor';

describe('ProfessionalInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ProfessionalInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ProfessionalInterceptor = TestBed.inject(ProfessionalInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
