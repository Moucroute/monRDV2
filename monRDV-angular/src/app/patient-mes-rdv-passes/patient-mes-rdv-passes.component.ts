import {Component, OnInit} from '@angular/core';
import {RendezVous} from "../model/rendez-vous";
import {ActivatedRoute} from "@angular/router";
import {PatientRdvInformationHttpService} from "../patient-rdv-information/patient-rdv-information-http.service";

@Component({
  selector: 'app-patient-mes-rdv-passes',
  templateUrl: './patient-mes-rdv-passes.component.html',
  styleUrls: ['./patient-mes-rdv-passes.component.css']
})
export class PatientMesRdvPassesComponent implements OnInit {


  listRendezvous: Array<RendezVous>;


  constructor(private route: ActivatedRoute, private patientRdvInformationHttpService: PatientRdvInformationHttpService) {

  }

  ngOnInit() {
    this.patientRdvInformationHttpService.findRendezvous(334).subscribe(
      resp => {
        this.listRendezvous = resp.json();

        for(let rdv of this.listRendezvous) {
          for(let creneau of rdv.creneaux) {
            creneau.debut = new Date(creneau.debut);
            creneau.fin = new Date(creneau.fin);
          }
        }
      },
      err => console.log(err));

  }


}
