import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rkt1Component } from './rkt-1.component';

describe('Rkt1Component', () => {
  let component: Rkt1Component;
  let fixture: ComponentFixture<Rkt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rkt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rkt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
