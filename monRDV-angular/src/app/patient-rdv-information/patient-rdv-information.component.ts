
import {PatientRdvInformationHttpService} from "./patient-rdv-information-http.service";
import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {RendezVous} from "../model/rendez-vous";


@Component({
  selector: 'app-patient-rdv-information',
  templateUrl: './patient-rdv-information.component.html',
  styleUrls: ['./patient-rdv-information.component.css']
})
export class PatientRdvInformationComponent implements OnInit {


  private rendezvous: RendezVous;

  private heureDebut: Date;
  private heureFin: Date;

  constructor(private route: ActivatedRoute, private patientRdvInformationHttpService: PatientRdvInformationHttpService)
  {

    this.rendezvous = this.patientRdvInformationHttpService.findRendezvousById(1);
    this.heureDebut = this.patientRdvInformationHttpService.findHeureDebutRendezvous(1);
    this.heureFin = this.patientRdvInformationHttpService.findHeureFinRendezvous(1);
  }

  ngOnInit() {
  }



}
