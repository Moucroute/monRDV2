import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Utilisateur} from "../model/utilisateur";

@Injectable()
export class PatientInscriptionHttpService {

  constructor(private http: Http) { }



  // save(utilisateur: Utilisateur) {
  //   if (utilisateur) {
  //       this.http.post('http://localhost:8080/utilisateur', utilisateur)
  //     }
  //
  //   }



}
