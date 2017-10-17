import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rkt3Component } from './rkt-3.component';

describe('Rkt3Component', () => {
  let component: Rkt3Component;
  let fixture: ComponentFixture<Rkt3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rkt3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rkt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
