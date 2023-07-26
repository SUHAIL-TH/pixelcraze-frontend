import { TestBed } from '@angular/core/testing';


import { ProfessionalGuard } from './professional.guard';

describe('UserGuardGuard', () => {
  let guard: ProfessionalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfessionalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
