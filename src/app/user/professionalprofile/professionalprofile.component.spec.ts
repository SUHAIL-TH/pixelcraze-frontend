import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalprofileComponent } from './professionalprofile.component';

describe('ProfessionalprofileComponent', () => {
  let component: ProfessionalprofileComponent;
  let fixture: ComponentFixture<ProfessionalprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalprofileComponent]
    });
    fixture = TestBed.createComponent(ProfessionalprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
