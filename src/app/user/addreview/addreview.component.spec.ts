import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreviewComponent } from './addreview.component';

describe('AddreviewComponent', () => {
  let component: AddreviewComponent;
  let fixture: ComponentFixture<AddreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddreviewComponent]
    });
    fixture = TestBed.createComponent(AddreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
