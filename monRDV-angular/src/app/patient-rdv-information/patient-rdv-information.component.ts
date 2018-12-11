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


  listRendezvous: Array<RendezVous>;

  // private heureDebut: Date;
  // private heureFin: Date;

  constructor(private route: ActivatedRoute, private patientRdvInformationHttpService: PatientRdvInformationHttpService) {

    this.chercherListRendezvous();
    // this.rendezvous = this.patientRdvInformationHttpService.findRendezvousById(1);
    // this.heureDebut = this.patientRdvInformationHttpService.findHeureDebutRendezvous(1);
    // this.heureFin = this.patientRdvInformationHttpService.findHeureFinRendezvous(1);
  }

  ngOnInit() {
    this.chercherListRendezvous();
  }

  chercherListRendezvous() {
    this.patientRdvInformationHttpService.findRendezvous(334).subscribe(
      resp => {
        this.listRendezvous = resp.json();
      },
      err => console.log(err));
  }

  // findHeureDebutRendezvous(id: number): Date {
  //
  // let rendezvousTrouve = this.findRendezvousById(id);
  // let heureDebut = rendezvousTrouve.creneaux[0].debut;
  //
  // for(let creneau of rendezvousTrouve.creneaux){
  //   if(creneau.debut < heureDebut){
  //     heureDebut = creneau.debut;
  //   }
  // }
  // return heureDebut;
  // }
  //
  // findHeureFinRendezvous(id: number): Date {
  //
  //   let rendezvousTrouve = this.findRendezvousById(id);
  //   let heureFin = rendezvousTrouve.creneaux[0].fin;
  //
  //   for(let creneau of rendezvousTrouve.creneaux){
  //     if(creneau.debut > heureFin){
  //       heureFin = creneau.debut;
  //     }
  //   }
  //   return heureFin;
  // }


}
