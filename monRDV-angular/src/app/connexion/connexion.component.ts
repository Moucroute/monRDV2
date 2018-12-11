import {Component, Input, OnInit} from '@angular/core';
import {ConnexionService} from "./connexion.service";
import {Patient} from "../model/patient";
import {Utilisateur} from "../model/utilisateur";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {


  @Input()
  utilisateurId: number;

  current: Utilisateur = new Utilisateur();

  email: string;

  motDePasse: string;

  constructor(private connexionService: ConnexionService) {

    console.log(sessionStorage.setItem('id', 'utilisateurId'));

  }

  ngOnInit() {

    console.log(sessionStorage);

  }




  connexion() {

    if (this.email = null) {

      alert("Veuillez renseigner votre email");

    }



  }

}
