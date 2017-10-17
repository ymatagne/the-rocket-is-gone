import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rkt2Component } from './rkt-2.component';

describe('Rkt2Component', () => {
  let component: Rkt2Component;
  let fixture: ComponentFixture<Rkt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rkt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rkt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
