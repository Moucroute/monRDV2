import { Injectable } from '@angular/core';
import {Utilisateur} from '../model/utilisateur';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';

@Injectable()
export class PatientDonneesUtilisateurHttpService {

  constructor() {


  }

  findById(id: number):  Observable<Response> {
    return null;
  }

  findPatientDefaut(id: number): Observable<Response> {
    return null;
  }

  save(utilisateur: Utilisateur){

  }
}
