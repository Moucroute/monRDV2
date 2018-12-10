
import {PatientRdvInformationHttpService} from "./patient-rdv-information-http.service";
import {Patient} from "../model/patient";
import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {RendezVous} from "../model/rendez-vous";
import {CreneauDisponible} from "../model/creneau-disponible";

@Component({
  selector: 'app-patient-rdv-information',
  templateUrl: './patient-rdv-information.component.html',
  styleUrls: ['./patient-rdv-information.component.css']
})
export class PatientRdvInformationComponent implements OnInit {

  private creneauDisponible: CreneauDisponible;
  private rendezvous: RendezVous;

  constructor(private route: ActivatedRoute, private patientRdvInformationHttpService: PatientRdvInformationHttpService)
  {
    this.creneauDisponible = this.patientRdvInformationHttpService.findCreneauDisponibleById(1);
  }

  ngOnInit() {
  }

  rechercherCreneauDisponible(id: number)
  {
    this.creneauDisponible = this.patientRdvInformationHttpService.findCreneauDisponibleById(id);
  }

}
