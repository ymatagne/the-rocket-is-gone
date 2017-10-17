import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agility4Component } from './agility-4.component';

describe('Agility4Component', () => {
  let component: Agility4Component;
  let fixture: ComponentFixture<Agility4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agility4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agility4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
