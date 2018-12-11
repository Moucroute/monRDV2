import {PatientRdvInformationHttpService} from "./patient-rdv-information-http.service";
import {ActivatedRoute} from "@angular/router";
import {Component, Input, OnInit} from "@angular/core";
import {RendezVous} from "../model/rendez-vous";

@Component({
  selector: 'app-patient-rdv-information',
  templateUrl: './patient-rdv-information.component.html',
  styleUrls: ['./patient-rdv-information.component.css']
})
export class PatientRdvInformationComponent implements OnInit {


  @Input('rendezVous')
  rendezVous: RendezVous;
  private heureDebut: Date;
  private heureFin: Date;

  constructor(private route: ActivatedRoute, private patientRdvInformationHttpService: PatientRdvInformationHttpService) {

  }

  ngOnInit() {
    this.heureDebut = this.findHeureDebutRendezvous(this.rendezVous);
    this.heureFin = this.findHeureFinRendezvous(this.rendezVous);
  }

  findHeureDebutRendezvous(rendezVousCurrent : RendezVous): Date {

    let heureDebut = rendezVousCurrent.creneaux[0].debut;

    console.log(rendezVousCurrent.creneaux);

    for(let creneau of rendezVousCurrent.creneaux){
      console.log(heureDebut);
      console.log(creneau.debut);
      if(creneau.debut < heureDebut){

        heureDebut = creneau.debut;
      }
    }
    return heureDebut;
  }

  findHeureFinRendezvous(rendezVousCurrent : RendezVous): Date {

    let heureFin = rendezVousCurrent.creneaux[0].fin;

    for(let creneau of rendezVousCurrent.creneaux){
      if(creneau.fin > heureFin){
        heureFin = creneau.fin;
      }
    }
    return heureFin;
  }


}
