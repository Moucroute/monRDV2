import {Component, OnInit} from '@angular/core';
import {ConnexionService} from "./connexion.service";
import {Patient} from "../model/patient";
import {Utilisateur} from "../model/utilisateur";
import {Profil} from "../model/profil";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {


  utilisateurId: number;

  utilisateur: Utilisateur = new Utilisateur();

  email: string = '';

  motDePasse: string = '';

  constructor(private connexionService: ConnexionService, private router: Router) {

    console.log(sessionStorage.setItem('id', 'utilisateur'));

  }

  ngOnInit() {

    console.log(sessionStorage);

  }


  connexion() {

    // if (this.email = '')  {
    //   alert("Veuillez renseigner votre email et votre mot de passe");
    // }

    this.connexionService.findByEmailMdp(this.email, this.motDePasse).subscribe(resp => {
      this.utilisateur = resp.json();
      if (this.utilisateur != null) {
        sessionStorage.setItem('id', JSON.stringify(this.utilisateur));


        console.log(this.utilisateur);

        console.log(this.utilisateur.profil.toString());

        if (this.utilisateur.profil.toString() == "Patient") {

          this.router.navigate(['patient/mesrdvavenir']);

        } else {

          alert("Le compte praticien ne fonctionne pas encore");

        }

      } else {

        alert("Cet identifiant est inconnu");

      }
    }, err => console.log(err));


  }


}

