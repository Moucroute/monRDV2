/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PatientDonneesUtilisateurHttpService } from './patient-donnees-utilisateur/patient-donnees-utilisateur-http.service';

describe('PatientDonneesUtilisateurHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientDonneesUtilisateurHttpService]
    });
  });

  it('should ...', inject([PatientDonneesUtilisateurHttpService], (service: PatientDonneesUtilisateurHttpService) => {
    expect(service).toBeTruthy();
  }));
});
