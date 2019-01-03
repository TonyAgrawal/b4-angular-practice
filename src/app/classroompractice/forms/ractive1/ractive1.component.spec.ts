import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ractive1Component } from './ractive1.component';

describe('Ractive1Component', () => {
  let component: Ractive1Component;
  let fixture: ComponentFixture<Ractive1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ractive1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ractive1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
