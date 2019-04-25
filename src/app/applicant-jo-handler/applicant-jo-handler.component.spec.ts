import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantJoHandlerComponent } from './applicant-jo-handler.component';

describe('ApplicantJoHandlerComponent', () => {
  let component: ApplicantJoHandlerComponent;
  let fixture: ComponentFixture<ApplicantJoHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantJoHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantJoHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
