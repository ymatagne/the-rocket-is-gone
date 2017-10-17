import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Container5Component } from './container-5.component';

describe('Container5Component', () => {
  let component: Container5Component;
  let fixture: ComponentFixture<Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
