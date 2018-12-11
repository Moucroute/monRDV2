import { Injectable } from '@angular/core';
import {Patient} from '../model/patient';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PatientMesPatientsHttpService {

  private patients: Array<Patient> = new Array<Patient>();

  constructor(private http: Http) {
    // this.load();
  }
  //
  // load() {
  //   this.http.get('http://localhost:8080/patient/monComptePatient/' + id + '/MesPatients ').subscribe(resp => {
  //     this.patients = resp.json();
  //   }, err => console.log(err));
  // }




  findAllById(id: number): Observable<Response> {
    return this.http.get('http://localhost:8080/patient/monComptePatient/' + id + '/MesPatients ');
  }





  // save(patient: Patient) {
  //   if (patient) {
  //        this.http.post('http://localhost:8080/patient/monComptePatient/' + patient.id + '/MesPatients/addPatient', patient).subscribe(resp => this.load(),
  //         err => console.log(err));
  //     }
  //
  //   }
  // }

  // delete(id: number):  {
  //   this.http.delete('http://localhost:8080/monComptePatient/MesPatientsDelete/' + id).subscribe(resp => this.load(),
  //     err => console.log(err));
  //
  // }




}
