import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSideErrorComponent } from './server-side-error.component';

describe('ServerSideErrorComponent', () => {
  let component: ServerSideErrorComponent;
  let fixture: ComponentFixture<ServerSideErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerSideErrorComponent]
    });
    fixture = TestBed.createComponent(ServerSideErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
