import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Orchestrateur1Component } from './orchestrateur-1.component';

describe('Orchestrateur1Component', () => {
  let component: Orchestrateur1Component;
  let fixture: ComponentFixture<Orchestrateur1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Orchestrateur1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Orchestrateur1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
