import { Component, OnInit } from '@angular/core';
import {PatientCalendrierHttpService} from './patient-calendrier-http.service';
import {RendezVous} from '../model/rendezVous';

@Component({
  selector: 'app-patient-calendrier',
  templateUrl: './patient-calendrier.component.html',
  styleUrls: ['./patient-calendrier.component.css']
})
export class PatientCalendrierComponent implements OnInit {

  private objet: Object;

  constructor(private patientService: PatientCalendrierHttpService) { }

  ngOnInit() {
  }

  listrdv(id: number): Array<RendezVous> {



    return this.patientService.findbyUtilisateur(id);
  }
}
