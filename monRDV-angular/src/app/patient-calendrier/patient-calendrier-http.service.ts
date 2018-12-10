import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Utilisateur} from '../model/utilisateur';
import {RendezVous} from '../model/rendezVous';
import {CreneauDisponible} from '../model/creneauDisponible';
import {Observable} from 'rxjs/Observable';


class Patients {
}


@Injectable()
export class PatientCalendrierHttpService {

  private utilisateur: Utilisateur = new Utilisateur;
  private patients: Array<Patients> = new Array<Patients>();
  private rendezVouss: Array<RendezVous> = new Array<RendezVous>();
  private creneaux: Array<CreneauDisponible> = new Array<CreneauDisponible>();

  constructor(private http: Http) {
  }

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

  findByUtilisateur(id: number): Observable<Response> {
    return this.http.get('http://localhost:8080/salle/' + id);
  }
}



