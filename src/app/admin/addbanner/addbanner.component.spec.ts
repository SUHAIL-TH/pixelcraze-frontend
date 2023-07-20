import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbannerComponent } from './addbanner.component';

describe('AddbannerComponent', () => {
  let component: AddbannerComponent;
  let fixture: ComponentFixture<AddbannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddbannerComponent]
    });
    fixture = TestBed.createComponent(AddbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
