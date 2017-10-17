import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Orchestrateur2Component } from './orchestrateur-2.component';

describe('Orchestrateur2Component', () => {
  let component: Orchestrateur2Component;
  let fixture: ComponentFixture<Orchestrateur2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Orchestrateur2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Orchestrateur2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
