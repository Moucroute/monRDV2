import { Injectable } from '@angular/core';
import {Patient} from '../model/patient';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PatientMesPatientsHttpService {

  private patients: Array<Patient> = new Array<Patient>();

  constructor(private http: Http) {
    this.load();
  }

  load() {
    this.http.get('http://localhost:8080/patient/mesinfos').subscribe(resp => {
      this.patients = resp.json();
    }, err => console.log(err));
  }

  findAll(): Array<Patient> {
    return this.patients;
  }

  findById(id: number): Observable<Response> {
    return this.http.get('http://localhost:8080/patient/mesinfos/' + id);
  }

  save(patient: Patient) {
    if (patient) {
      if (patient.id) {
        this.http.put('http://localhost:8080/patient/mesinfos/' + patient.id, patient).subscribe(resp => this.load(),
          err => console.log(err)
        );
      } else {
        this.http.post('http://localhost:8080/patient/mesinfos', patient).subscribe(resp => this.load(),
          err => console.log(err));
      }

    }
  }

  delete(id: number) {
    this.http.delete('http://localhost:8080/patient/mesinfos/' + id).subscribe(resp => this.load(),
      err => console.log(err));

  }




}
