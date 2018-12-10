/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PatientMesRdvPassesComponent } from './patient-mes-rdv-passes.component';

describe('PatientMesRdvPassesComponent', () => {
  let component: PatientMesRdvPassesComponent;
  let fixture: ComponentFixture<PatientMesRdvPassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMesRdvPassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMesRdvPassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
