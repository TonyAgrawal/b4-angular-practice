import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesampleComponent } from './templatesample.component';

describe('TemplatesampleComponent', () => {
  let component: TemplatesampleComponent;
  let fixture: ComponentFixture<TemplatesampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
