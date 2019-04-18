import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsmsComponent } from './editsms.component';

describe('EditsmsComponent', () => {
  let component: EditsmsComponent;
  let fixture: ComponentFixture<EditsmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
