/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PatientMesRdvAAvenirComponent } from './patient-mes-rdv-a-avenir.component';

describe('PatientMesRdvAAvenirComponent', () => {
  let component: PatientMesRdvAAvenirComponent;
  let fixture: ComponentFixture<PatientMesRdvAAvenirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMesRdvAAvenirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMesRdvAAvenirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
