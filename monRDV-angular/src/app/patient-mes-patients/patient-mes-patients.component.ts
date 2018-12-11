import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../model/patient';
import {PatientMesPatientsHttpService} from './patient-mes-patients-http.service';

@Component({
  selector: 'app-patient-mes-patients',
  templateUrl: './patient-mes-patients.component.html',
  styleUrls: ['./patient-mes-patients.component.css']
})
export class PatientMesPatientsComponent implements OnInit {

  @Input()
  utilisateurId: number;
  show: boolean = false;
  patients: Array<Patient> = new Array<Patient>();
  current: Patient = new Patient();


  constructor(private patientMesPatientsService: PatientMesPatientsHttpService) {
  }

  ngOnInit() {
    this.patientMesPatientsService.findAllById(this.utilisateurId).subscribe(resp => {
        this.patients = resp.json();
        console.log(this.patients);
      }
    );
  }


  add() {
    this.show = true;
    this.current = new Patient();

  }


  saver() {
    this.patientMesPatientsService.save(this.current).subscribe(resp => {
        this.patientMesPatientsService.findAllById(this.utilisateurId).subscribe(resp3 => {
            this.patients = resp3.json();
            console.log(this.patients);
            this.show = false;
            this.current = new Patient();

          }
        );
      }
    );


  }

  cancel() {
    this.show = false;
    this.current = new Patient();
  }

  delete(id: number) {
    this.patientMesPatientsService.delete(id).subscribe(resp => {
        this.patientMesPatientsService.findAllById(this.utilisateurId).subscribe(resp2 => {
            this.patients = resp2.json();
            console.log(this.patients);
          }
        );
      }
    );
  }


}





