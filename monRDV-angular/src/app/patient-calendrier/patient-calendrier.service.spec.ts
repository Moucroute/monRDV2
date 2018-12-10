/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PatientCalendrierService } from './patient-calendrier.service';

describe('PatientCalendrierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientCalendrierService]
    });
  });

  it('should ...', inject([PatientCalendrierService], (service: PatientCalendrierService) => {
    expect(service).toBeTruthy();
  }));
});
