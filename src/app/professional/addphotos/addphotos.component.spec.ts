import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddphotosComponent } from './addphotos.component';

describe('AddphotosComponent', () => {
  let component: AddphotosComponent;
  let fixture: ComponentFixture<AddphotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddphotosComponent]
    });
    fixture = TestBed.createComponent(AddphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
