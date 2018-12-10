import { Component, OnInit } from '@angular/core';
import {Patient} from '../model/patient';
import {PatientMesPatientsHttpService} from './patient-mes-patients-http.service';

@Component({
  selector: 'app-patient-mes-patients',
  templateUrl: './patient-mes-patients.component.html',
  styleUrls: ['./patient-mes-patients.component.css']
})
export class PatientMesPatientsComponent implements OnInit {

  show: boolean = false;
  current: Patient = new Patient();

  constructor(private patientMesPatientsService: PatientMesPatientsHttpService) {
  }

  ngOnInit() {
  }

  list(): Array<Patient> {
    return this.patientMesPatientsService.findAll();
  }


  add() {
    this.show = true;
    this.current = new Patient();

  }

  edit(id: number) {
    this.patientMesPatientsService.findById(id).subscribe(resp => {
      this.current = resp.json();
      this.show = true;
    })


    // this.salleHttpService.findById(id).subscribe(resp => this.current = resp.json(), err => console.log(err));

    // this.current = new Salle(salle.id, salle.version, salle.nom, new Adresse(salle.adresse.rue, salle.adresse.codePostal, salle.adresse.ville));
    // this.show = true;
  }


  saver() {
    this.patientMesPatientsService.save(this.current);
    this.show = false;
    this.current = new Patient();
  }

  cancel() {
    this.show = false;
    this.current = new Patient();
  }

  delete(id: number) {
    this.patientMesPatientsService.delete(id);
  }



}
