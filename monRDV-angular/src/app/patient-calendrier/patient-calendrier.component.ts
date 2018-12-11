import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RendezVous} from '../model/rendez-vous';
import {Utilisateur} from '../model/utilisateur';
import {PatientCalendrierHttpService} from './patient-calendrier-http.service';
import {CreneauDisponible} from '../model/creneau-disponible';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';

import {isBoolean, isNull} from 'util';
import {JourCalendrier} from './jourCalendrier';

@Component({
  selector: 'app-patient-calendrier',
  templateUrl: './patient-calendrier.component.html',
  styleUrls: ['./patient-calendrier.component.css']
})
export class PatientCalendrierComponent implements OnInit {
  private rendezVouss: Array<RendezVous> = new Array<RendezVous>();
  private heureDebut: Date;
  private heureFin: Date;

  @Output()
  childEvent = new EventEmitter();


  arthur: Utilisateur = new Utilisateur();

  dateJour: Date = new Date();
  semaine: Array<string> = new Array<string>('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
  annee: Array<string> = new Array<string>('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');
  @Input()
  currentMonth: number = this.dateJour.getMonth();
  currentYear: number = this.dateJour.getFullYear();
  libelleMois: string = this.annee[this.currentMonth];
  currentDayDate: Date = new Date(this.currentYear, this.currentMonth, 1);
  moisActuel: Array<JourCalendrier> = this.genererMois();
  semaine1: Array<JourCalendrier> = this.structurerMois(this.moisActuel, 0, 7);
  semaine2: Array<JourCalendrier> = this.structurerMois(this.moisActuel, 0, 7);
  semaine3: Array<JourCalendrier> = this.structurerMois(this.moisActuel, 0, 7);
  semaine4: Array<JourCalendrier> = this.structurerMois(this.moisActuel, 0, 7);
  semaine5: Array<JourCalendrier> = this.structurerMois(this.moisActuel, 0, 7);
  semaine6: Array<JourCalendrier> = this.structurerMois(this.moisActuel, 0, 7);
  semaine7: Array<JourCalendrier> = this.structurerMois(this.moisActuel, 0, this.moisActuel.length);

  constructor(private patientCalendrierservice: PatientCalendrierHttpService) {

  }

  ngOnInit() {
    this.listRendezVous(287);
  }

  // rendezVouss = this.listRendezVous(7);

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

  listRendezVous(id: number) {
    this.patientCalendrierservice.findRendezVousById(id).subscribe(resp => {
      this.rendezVouss = resp.json();
      for (let rdv of this.rendezVouss) {
        for (let creneau of rdv.creneaux) {
          creneau.debut = new Date(creneau.debut);
          creneau.fin = new Date(creneau.fin);
        }
      }
    }, err => console.log(err));

  }

  plage(rdv: RendezVous) {
    let b = true;
    for (const creneau of rdv.creneaux) {
      if (b === true) {
        this.heureDebut = creneau.debut;
        b = false;
      }
      this.heureFin = creneau.fin;
    }
  }

  compareDates(jour: Date) {

    if (jour == null) {
      return false;
    } else {
      console.log(jour.getDay());
      return (this.heureDebut.getDate() == jour.getDate() && this.heureDebut.getMonth() == jour.getMonth());
    }


  }

  genererMois(): Array<JourCalendrier> {
    const mois: Array<JourCalendrier> = new Array<JourCalendrier>();
    let traite: string;
    traite = 'false';
    const dernierJour = this.NombreJourMois(this.currentMonth, this.currentYear);
    for (let i = 1; i <= dernierJour; i++) {
      const dayDate = new Date(this.currentYear, this.currentMonth, i);
      const currentDay: JourCalendrier = new JourCalendrier();
      const j: number = dayDate.getDay();

      if (j !== 1 && traite === 'false') {
        let ecart: number;
        if (j > 1) {
          ecart = j - 1;
        } else {
          ecart = 6;
        }
        for (let k = 0; k < ecart; k++) {
          const currentDayVide: JourCalendrier = new JourCalendrier();
          currentDayVide.libelle = '';
          currentDayVide.num = null;
          currentDay.dateComplete = null;
          mois.push(currentDayVide);
        }
        currentDay.libelle = this.semaine[j];
        currentDay.num = i;
        currentDay.dateComplete = dayDate;
        mois.push(currentDay);
        traite = 'true';
      } else {
        currentDay.libelle = this.semaine[j];
        currentDay.dateComplete = dayDate;
        currentDay.num = i;
        mois.push(currentDay);
        traite = 'true';
      }
    }
    return mois;
  }

  structurerMois(mois: Array<JourCalendrier>, debut: number, fin: number): Array<JourCalendrier> {
    let semaineMois: Array<JourCalendrier> = new Array<JourCalendrier>();
    semaineMois = mois.splice(debut, fin);
    return semaineMois;
  }

  nextMonth(): number {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.libelleMois = this.annee[this.currentMonth];
    this.actualiserCalendrier();
    return this.currentMonth;
  }

  precMonth(): number {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.libelleMois = this.annee[this.currentMonth];
    this.actualiserCalendrier();
    return this.currentMonth;
  }

  actualiserCalendrier() {
    this.moisActuel = this.genererMois();
    this.semaine1 = this.structurerMois(this.moisActuel, 0, 7);
    this.semaine2 = this.structurerMois(this.moisActuel, 0, 7);
    this.semaine3 = this.structurerMois(this.moisActuel, 0, 7);
    this.semaine4 = this.structurerMois(this.moisActuel, 0, 7);
    this.semaine5 = this.structurerMois(this.moisActuel, 0, 7);
    this.semaine6 = this.structurerMois(this.moisActuel, 0, 7);
    this.semaine7 = this.structurerMois(this.moisActuel, 0, this.moisActuel.length - 1);
  }


  NombreJourMois(mois, annee) {
    let nbreJour = 0;

    if (mois <= 6) {
      if (mois % 2 !== 0) {
        nbreJour = 30;
      } else {
        nbreJour = 31;
      }
    } else {
      if (mois % 2 === 1) {
        nbreJour = 31;
      } else {
        nbreJour = 30;
      }
    }
    if (mois === 1) {
      if (annee % 4 === 0) {
        if (annee % 100 === 0) {
          if (annee % 400 === 0) {
            nbreJour = 29;
          } else {
            nbreJour = 28;
          }

        } else {
          nbreJour = 29;
        }
      } else {
        nbreJour = 28;
      }

    }

    return nbreJour;

  }

}





