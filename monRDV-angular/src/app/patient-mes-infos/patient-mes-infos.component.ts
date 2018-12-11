import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-patient-mes-infos',
  templateUrl: './patient-mes-infos.component.html',
  styleUrls: ['./patient-mes-infos.component.css']
})
export class PatientMesInfosComponent implements OnInit {

  utilisateurId: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.utilisateurId = params['id']);
  }

}
