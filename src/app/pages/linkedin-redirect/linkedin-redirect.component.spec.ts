import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinRedirectComponent } from './linkedin-redirect.component';

describe('LinkedinRedirectComponent', () => {
  let component: LinkedinRedirectComponent;
  let fixture: ComponentFixture<LinkedinRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedinRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
