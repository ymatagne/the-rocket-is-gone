import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agility2Component } from './agility-2.component';

describe('Agility2Component', () => {
  let component: Agility2Component;
  let fixture: ComponentFixture<Agility2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agility2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agility2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
