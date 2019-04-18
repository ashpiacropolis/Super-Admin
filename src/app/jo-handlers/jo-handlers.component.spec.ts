import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoHandlersComponent } from './jo-handlers.component';

describe('JoHandlersComponent', () => {
  let component: JoHandlersComponent;
  let fixture: ComponentFixture<JoHandlersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoHandlersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoHandlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
