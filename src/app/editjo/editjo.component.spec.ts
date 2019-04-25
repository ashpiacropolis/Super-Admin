import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditjoComponent } from './editjo.component';

describe('EditjoComponent', () => {
  let component: EditjoComponent;
  let fixture: ComponentFixture<EditjoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditjoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditjoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
