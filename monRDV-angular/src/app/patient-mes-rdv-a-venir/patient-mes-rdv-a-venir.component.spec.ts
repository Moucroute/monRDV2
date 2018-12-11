/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PatientMesRdvAVenirComponent } from './patient-mes-rdv-a-venir.component';

describe('PatientMesRdvAVenirComponent', () => {
  let component: PatientMesRdvAVenirComponent;
  let fixture: ComponentFixture<PatientMesRdvAVenirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMesRdvAVenirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMesRdvAVenirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
