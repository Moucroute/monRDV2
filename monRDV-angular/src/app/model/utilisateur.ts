import {Profil} from './profil';
import {Patient} from './patient';
import {RendezVous} from './rendez-vous';
import {Praticien} from './praticien';


export class Utilisateur {
  id: number;
  version: number;
  email: string;
  telephone: string;
  dateCreation: Date;
  motDePasse: string;
  profil: Profil;
  patients: Array<Patient> = new Array<Patient>();
  rendezVous: Array<RendezVous> = new Array<RendezVous>();
  praticien: Praticien;


  constructor(id?: number, version?: number, email?: string, telephone?: string, dateCreation?: Date, motDePasse?: string, profil?: Profil, patients?: Array<Patient>, rendezVous?: Array<RendezVous>, praticien?: Praticien) {
    this.id = id;
    this.version = version;
    this.email = email;
    this.telephone = telephone;
    this.dateCreation = dateCreation;
    this.motDePasse = motDePasse;
    this.profil = profil;
    this.patients = patients;
    this.rendezVous = rendezVous;
    this.praticien = praticien;
  }

}
