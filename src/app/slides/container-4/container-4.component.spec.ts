import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Container4Component } from './container-4.component';

describe('Container4Component', () => {
  let component: Container4Component;
  let fixture: ComponentFixture<Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
