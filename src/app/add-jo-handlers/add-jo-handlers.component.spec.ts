import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJoHandlersComponent } from './add-jo-handlers.component';

describe('AddJoHandlersComponent', () => {
  let component: AddJoHandlersComponent;
  let fixture: ComponentFixture<AddJoHandlersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJoHandlersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJoHandlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
