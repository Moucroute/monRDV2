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

  constructor(private patientMesPatientsService: PatientMesPatientsHttpService) {
  }

  ngOnInit() {
    this.patientMesPatientsService.findAllById(this.utilisateurId).subscribe(resp => {
        this.patients = resp.json();
        console.log(this.patients);
      }
    );
  }

// list(id: number): Array<Patient> {
//   return this.patientMesPatientsService.findAllById(id);
// }

//
// add() {
//   this.show = true;
//   this.current = new Patient();
//
// }
//
// saver() {
//   this.patientMesPatientsService.save(this.current);
//   this.show = false;
//   this.current = new Patient();
// }
//
// cancel() {
//   this.show = false;
//   this.current = new Patient();
// }
//
// delete(id: number) {
//   this.patientMesPatientsService.delete(id);
// }


}
