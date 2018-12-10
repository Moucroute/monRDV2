import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-donnees-utilisateur',
  templateUrl: './patient-donnees-utilisateur.component.html',
  styleUrls: ['./patient-donnees-utilisateur.component.css']
})
export class PatientDonneesUtilisateurComponent implements OnInit {

  editNom: boolean = false;
  editPrenom: boolean = false;
  editMail: boolean = false;
  editPassword: boolean = false;
  editTelephone: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
