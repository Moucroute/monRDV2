import { Injectable } from '@angular/core';
import {Utilisateur} from '../model/utilisateur';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {Patient} from '../model/patient';

@Injectable()
export class PatientDonneesUtilisateurHttpService {

  constructor(private http: Http) {
  }


  findPatientDefaut(id: number): Observable<Response> {
    return this.http.get('http://localhost:8080/patients/monComptePatient/' + id);
  }

  save(utilisateur: Patient){

  }
}
