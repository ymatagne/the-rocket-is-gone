import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Orchestrateur3Component } from './orchestrateur-3.component';

describe('Orchestrateur3Component', () => {
  let component: Orchestrateur3Component;
  let fixture: ComponentFixture<Orchestrateur3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Orchestrateur3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Orchestrateur3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
