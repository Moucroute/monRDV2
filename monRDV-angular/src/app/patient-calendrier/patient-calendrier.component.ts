import {Component, OnInit} from '@angular/core';
import {RendezVous} from '../model/rendez-vous';
import {Utilisateur} from '../model/utilisateur';
import {PatientCalendrierHttpService} from './patient-calendrier-http.service';

@Component({
  selector: 'app-patient-calendrier',
  templateUrl: './patient-calendrier.component.html',
  styleUrls: ['./patient-calendrier.component.css']
})
export class PatientCalendrierComponent implements OnInit {
  constructor(private patientCalendrierservice: PatientCalendrierHttpService) {
    // const arthur: Utilisateur = new Utilisateur();
    // const rdv1: RendezVous = new RendezVous(1, 0, true, arthur);


  }

  ngOnInit() {
  }


  listRendezVous(id: number){
    return this.patientCalendrierservice.findUtilisateurById(id);
  }
}


