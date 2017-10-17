import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agility3Component } from './agility-3.component';

describe('Agility3Component', () => {
  let component: Agility3Component;
  let fixture: ComponentFixture<Agility3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agility3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agility3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
