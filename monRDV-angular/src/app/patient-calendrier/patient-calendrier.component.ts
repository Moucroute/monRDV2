import {Component, OnInit} from '@angular/core';
import {RendezVous} from '../model/rendez-vous';
import {Utilisateur} from '../model/utilisateur';
import {PatientCalendrierHttpService} from './patient-calendrier-http.service';
import {CreneauDisponible} from '../model/creneau-disponible';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';

@Component({
  selector: 'app-patient-calendrier',
  templateUrl: './patient-calendrier.component.html',
  styleUrls: ['./patient-calendrier.component.css']
})
export class PatientCalendrierComponent {
  private user_creneau = new Utilisateur();

  constructor(private patientCalendrierservice: PatientCalendrierHttpService) {
    // const arthur: Utilisateur = new Utilisateur();
    // const rdv1: RendezVous = new RendezVous(1, 0, true, arthur);


  }

  // ngOnInit() {
  // }


  listRendezVous(id: number) {
    this.patientCalendrierservice.findUtilisateurById(id).subscribe(resp => {
        this.user_creneau = resp.json();
        for (let i: number; i < this.user_creneau.rendezVous.length; i++) {
          this.patientCalendrierservice.findCreneauByRendezVous(this.user_creneau.rendezVous[i].id).subscribe(respo => this.user_creneau.rendezVous[i].creneaux = respo.json(), erre => console.log(erre));

        }
      },
      err => console.log(err));
  }
}


