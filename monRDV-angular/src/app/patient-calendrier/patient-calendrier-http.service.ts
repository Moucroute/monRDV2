import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class PatientCalendrierHttpService {

  private utilisateur: Utilisateur=new Utilisateur;
  private patients: Array<Patients> = new Array<Patients>();
  private rendezVouss: Array<RendezVous> = new Array<RendezVous>();
  private creneaux: Array<CreneauDisponibles> = new Array<CreneauDisponibles>();

  constructor(private http: Http) {

    load() {
      this.http.get('http://localhost:8080/patient/monComptePatient/').subscribe(resp => {
        this.utilisateur = resp.json();
        this.patients = resp.json();
        this.rendezVouss = resp.json();
        this.creneaux = resp.json();
      }, err => console.log(err));
    }

    findAll(): Array<RendezVous> {
      return this.rendezVouss;
  }
    findById(id: number): RendezVous {
      for (let salle of this.salles){
        if(salle.id == id){
          return salle;
        }
      }
      return null;
    }

  }

}
