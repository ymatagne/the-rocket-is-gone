import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Norme2Component } from './norme-2.component';

describe('Norme2Component', () => {
  let component: Norme2Component;
  let fixture: ComponentFixture<Norme2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Norme2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Norme2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
