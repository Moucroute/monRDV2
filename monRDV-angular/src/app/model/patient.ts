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
  utilisateur: Utilisateur;
  rendezVous: Array<RendezVous>;


  constructor(id?: number, version?: number, defaut?: boolean, nom?: string, prenom?: string, dateNaissance?: Date,
              dateCreation?: Date, utilisateur?: Utilisateur, rendezVous?: Array<RendezVous>) {
    this.id = id;
    this.version = version;
    this.defaut = defaut;
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.dateCreation = dateCreation;
    this.utilisateur = utilisateur ? utilisateur : new Utilisateur();
    if (rendezVous) {
      this.rendezVous = rendezVous;
    } else {
      this.rendezVous = new Array<RendezVous>();
    }
  }

}
