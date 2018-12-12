import {Component, Input, OnInit} from '@angular/core';
import {Utilisateur} from '../model/utilisateur';
import {Patient} from '../model/patient';
import {PatientDonneesUtilisateurHttpService} from './patient-donnees-utilisateur-http.service';
import {ConnexionComponent} from '../connexion/connexion.component';
import {RendezVous} from '../model/rendez-vous';

@Component({
  selector: 'app-patient-donnees-utilisateur',
  templateUrl: './patient-donnees-utilisateur.component.html',
  styleUrls: ['./patient-donnees-utilisateur.component.css']
})
export class PatientDonneesUtilisateurComponent implements OnInit {

  utilisateurId: number;
  affiche: boolean = false;
  current: Patient = new Patient();
  patientForm: Patient = null;

  constructor(private patientDonneesUtilisateurService: PatientDonneesUtilisateurHttpService) {
  }

  ngOnInit() {
    let util : Utilisateur = JSON.parse(sessionStorage.getItem('id'));
    this.utilisateurId = util.id;
    this.patientDonneesUtilisateurService.findPatientDefaut(this.utilisateurId).subscribe(resp => {
      this.current = resp.json();
      console.log(this.current);
    }, err => console.log(err));
  }

  edit() {
    this.patientDonneesUtilisateurService.findPatientDefaut(this.utilisateurId).subscribe(resp => {
      this.patientForm = resp.json(), this.affiche = true;
      console.log(this.patientForm);
    }, err => console.log(err));
  }

  save() {
    this.patientDonneesUtilisateurService.save(this.current.id, this.patientForm).subscribe(resp => {
      this.current = resp.json();
      console.log(this.current);
    }, err => console.log(err));
    this.affiche = false;
  }

  cancel() {
    this.affiche = false;
  }

}
