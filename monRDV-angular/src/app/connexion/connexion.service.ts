import { Injectable } from '@angular/core';
import {Utilisateur} from '../model/utilisateur';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

@Injectable()
export class ConnexionService {

  constructor(private http: Http) {


  }


  //Trouver utilisateur par email

  findByEmailMdp(email: string, motDePasse: string): Observable<Response> {
    return this.http.get('http://localhost:8080/utilisateur/connexion/' + email + ':' +  motDePasse);
  }

  //Apres authentification de l'utilisateur, le renvoyer vers son compte


}
