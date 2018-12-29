import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfsampleComponent } from './ifsample.component';

describe('IfsampleComponent', () => {
  let component: IfsampleComponent;
  let fixture: ComponentFixture<IfsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
