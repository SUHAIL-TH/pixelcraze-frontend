import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetsubmitComponent } from './resetsubmit.component';

describe('ResetsubmitComponent', () => {
  let component: ResetsubmitComponent;
  let fixture: ComponentFixture<ResetsubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetsubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
