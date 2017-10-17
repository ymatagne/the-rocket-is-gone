import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agility5Component } from './agility-5.component';

describe('Agility5Component', () => {
  let component: Agility5Component;
  let fixture: ComponentFixture<Agility5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agility5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agility5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
