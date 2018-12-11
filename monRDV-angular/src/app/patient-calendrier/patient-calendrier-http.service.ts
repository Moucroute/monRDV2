import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Utilisateur} from '../model/utilisateur';
import {RendezVous} from '../model/rendez-vous';
import {Observable} from 'rxjs/Observable';
import {CreneauDisponible} from "../model/creneau-disponible";


class Patients {
}


@Injectable()
export class PatientCalendrierHttpService {

  private utilisateur: Utilisateur = new Utilisateur;
  private patients: Array<Patients> = new Array<Patients>();
  private rendezVous: Array<RendezVous> = new Array<RendezVous>();
  private creneaux: Array<CreneauDisponible> = new Array<CreneauDisponible>();

  constructor(private http: Http) {
  }

  load() {
    this.http.get('http://localhost:8080/patient/monComptePatient/').subscribe(resp => {

      this.rendezVous = resp.json();

    }, err => console.log(err));
  }

  findAll(): Array<RendezVous> {
    return this.rendezVous;
  }

  findRendezVousById(id: number): Observable<Response> {
    return this.http.get('http://localhost:8080/patient/Historique/' + id);
  }

  findCreneauByRendezVous(id: number): Observable<Response> {
    return this.http.get('http://localhost:8080/patient/mesRendezVous/' + id);
  }

}




