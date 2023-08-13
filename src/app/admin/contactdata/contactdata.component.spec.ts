import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactdataComponent } from './contactdata.component';

describe('ContactdataComponent', () => {
  let component: ContactdataComponent;
  let fixture: ComponentFixture<ContactdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactdataComponent]
    });
    fixture = TestBed.createComponent(ContactdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
