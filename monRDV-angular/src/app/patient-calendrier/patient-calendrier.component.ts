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
  private rendezVouss: Array<RendezVous>= new Array<RendezVous>();
  private heureDebut: Date;
  private heureFin: Date;
  constructor(private patientCalendrierservice: PatientCalendrierHttpService) {
    // const arthur: Utilisateur = new Utilisateur();
    // const rdv1: RendezVous = new RendezVous(1, 0, true, arthur);


  }

  // ngOnInit() {
  // }


  // listRendezVous2(id: number) {
  //   this.patientCalendrierservice.findRendezVousById(id).subscribe(resp => {
  //       this.rendezVouss = resp.json();
  //       for (let i: number; i < this.rendezVouss.rendezVous.length; i++) {
  //         this.patientCalendrierservice.findCreneauByRendezVous(this.rendezVouss.rendezVous[i].id).subscribe(respo => {this.rendezVouss.rendezVous[i].creneaux = respo.json()}, erre => console.log(erre));
  //
  //       }
  //     },
  //     err => console.log(err));
  // }

  listRendezVous(id: number): Array<RendezVous> {
    this.patientCalendrierservice.findRendezVousById(id).subscribe(resp => {
      this.rendezVouss = resp.json(); }, err => console.log(err));
    return this.rendezVouss;
  }
  plage(rdv: RendezVous) {
    let b: boolean = true;
    for (const creneau of rdv.creneaux){
      if (b = true){
        this.heureDebut = creneau.debut;
        b = false;
      }
      this.heureFin = creneau.fin;


    }
  }
}


