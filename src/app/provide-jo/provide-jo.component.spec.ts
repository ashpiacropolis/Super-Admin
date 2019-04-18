import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideJoComponent } from './provide-jo.component';

describe('ProvideJoComponent', () => {
  let component: ProvideJoComponent;
  let fixture: ComponentFixture<ProvideJoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvideJoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideJoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
