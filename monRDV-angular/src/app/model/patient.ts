import {RendezVous} from './rendez-vous';
import {Utilisateur} from './utilisateur';

export class Patient {
  id: number;
  version: number;
  defaut: boolean;
  nom: string;
  prenom: string;
  dateNaissance: Date;
  dateCreation: Date;
  utilisateur: Utilisateur = new Utilisateur();
  rendezVous: Array<RendezVous> = new Array<RendezVous>();


  constructor(id?: number, version?: number, defaut?: boolean, nom?: string, prenom?: string, dateNaissance?: Date, dateCreation?: Date, utilisateur?: Utilisateur, rendezVous?: Array<RendezVous>) {
    this.id = id;
    this.version = version;
    this.defaut = defaut;
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.dateCreation = dateCreation;
    this.utilisateur = utilisateur;
    this.rendezVous = rendezVous;
  }

}
