import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CVOpenerComponent } from './cvopener.component';

describe('CVOpenerComponent', () => {
  let component: CVOpenerComponent;
  let fixture: ComponentFixture<CVOpenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVOpenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CVOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
