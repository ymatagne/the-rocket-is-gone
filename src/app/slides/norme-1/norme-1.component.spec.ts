import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Norme1Component } from './norme-1.component';

describe('Norme1Component', () => {
  let component: Norme1Component;
  let fixture: ComponentFixture<Norme1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Norme1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Norme1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
