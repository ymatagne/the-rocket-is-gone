import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Orchestrateur4Component } from './orchestrateur-4.component';

describe('Orchestrateur4Component', () => {
  let component: Orchestrateur4Component;
  let fixture: ComponentFixture<Orchestrateur4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Orchestrateur4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Orchestrateur4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
