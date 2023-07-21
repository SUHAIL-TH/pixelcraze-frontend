import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessinalrequestComponent } from './professinalrequest.component';

describe('ProfessinalrequestComponent', () => {
  let component: ProfessinalrequestComponent;
  let fixture: ComponentFixture<ProfessinalrequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessinalrequestComponent]
    });
    fixture = TestBed.createComponent(ProfessinalrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
