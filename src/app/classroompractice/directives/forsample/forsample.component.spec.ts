import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForsampleComponent } from './forsample.component';

describe('ForsampleComponent', () => {
  let component: ForsampleComponent;
  let fixture: ComponentFixture<ForsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
