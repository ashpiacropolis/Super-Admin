import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JodetailsComponent } from './jodetails.component';

describe('JodetailsComponent', () => {
  let component: JodetailsComponent;
  let fixture: ComponentFixture<JodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
