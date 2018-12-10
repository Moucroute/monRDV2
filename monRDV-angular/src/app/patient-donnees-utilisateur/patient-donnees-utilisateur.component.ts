import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../model/utilisateur'
import {Patient} from '../model/patient';
import {PatientDonneesUtilisateurHttpService} from './patient-donnees-utilisateur-http.service';

@Component({
  selector: 'app-patient-donnees-utilisateur',
  templateUrl: './patient-donnees-utilisateur.component.html',
  styleUrls: ['./patient-donnees-utilisateur.component.css']
})
export class PatientDonneesUtilisateurComponent implements OnInit {

  affiche: boolean = false;
  current: Utilisateur;
  currentPatient: Patient;

  constructor(private patientDonneesUtilisateurService: PatientDonneesUtilisateurHttpService) { }

  ngOnInit() {
  }

  edit(id : number){
    this.affiche = true;
    this.patientDonneesUtilisateurService.findById(id).subscribe(resp => this.current = resp.json(), err => console.log(err));
    this.patientDonneesUtilisateurService.findPatientDefaut(id).subscribe(resp => this.currentPatient = resp.json(), err => console.log(err));
  }

  save() {
    this.patientDonneesUtilisateurService.save(this.current);
    this.affiche = false;
  }

  cancel() {
    this.affiche = false;
  }

}
