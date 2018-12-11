import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-mes-rdv-a-avenir',
  templateUrl: './patient-mes-rdv-a-venir.component.html',
  styleUrls: ['./patient-mes-rdv-a-venir.component.css']
})
export class PatientMesRdvAVenirComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test(rdv: RendezVous) {
    this.rdv = rdv;
  }

  isAffiche () {
    if(this.rdv != null) {
      return true;
    }
    else {
      return false;
    }
  }

}
