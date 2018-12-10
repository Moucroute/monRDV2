import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';



@Injectable()
export class PatientMesPatientsService {

  private patients: Array<Patient> = new Array<Patient>();

  private date: Date = new Date();

  constructor() {
    this.patients.push(new Patient(1,0,false , 'Jorda', 'Virginie', this.date));
    this.patients.push(new Patient(2,0,false , 'Mouden', 'Charlotte', this.date));
    this.patients.push(new Patient(3,0,false , 'Gonzales', 'Arthur', this.date));
  }
  findAll(): Array<Patient> {
    return this.patients;
  }

  findById(id: number): Patient {
    for (const patient of this.patients){
      if (patient.id == id) {
        return patient;
      }
    }
    return null;
  }

  save(patient: Patient){
    if (patient) {
      if (!patient.id) {
        if (this.patients.length > 0) {
          patient.id = this.patients[this.patients.length - 1].id + 1;
        } else {
          patient.id = 1;
        }
        this.patients.push(patient);
      } else {
        this.findById(patient.id).nom = patient.nom;
        this.findById(patient.id).prenom = patient.prenom;
        this.findById(patient.id).dateNaissance = patient.dateNaissance;

        return patient;


      }
    }

  }

  delete(patient: Patient) {
    const position = this.patients.indexOf(patient);
    this.patients.splice(position, 1);
  }

}
