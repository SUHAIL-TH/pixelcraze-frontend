import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsComponent } from './professionals.component';

describe('ProfessionalsComponent', () => {
  let component: ProfessionalsComponent;
  let fixture: ComponentFixture<ProfessionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
