import {Component, Input, OnInit} from '@angular/core';
import {Patient} from "../model/patient";
import {Utilisateur} from "../model/utilisateur";

@Component({
  selector: 'app-patient-inscription',
  templateUrl: './patient-inscription.component.html',
  styleUrls: ['./patient-inscription.component.css']
})
export class PatientInscriptionComponent implements OnInit {

  current: Utilisateur = new Utilisateur();

  currentPatient: Patient = new Patient();

  constructor(private salleHttpService: SalleHttpService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  valider(){
    this.current.patients.push(this.currentPatient);
    this.salleHttpService.save(this.current);
  }

}
