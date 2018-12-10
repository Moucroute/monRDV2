import {Injectable} from '@angular/core';

import {CreneauDisponible} from "../model/creneau-disponible";
import {Lieu} from "../model/lieu";
import {RendezVous} from "../model/rendez-vous";
import {Modalite} from "../model/modalite";
import {Motif} from "../model/motif";
import {Specialite} from "../model/specialite";
import {Praticien} from "../model/praticien";
import {Patient} from "../model/patient";
import {Utilisateur} from "../model/utilisateur";
import {Adresse} from "../model/adresse";

@Injectable()
export class PatientRdvInformationHttpService {

  private date: Date = new Date();
  private adresse: Adresse = new Adresse("Impasse des marmottes", "64230", "Lescar");
  private rendezvouslist: Array<RendezVous> = new Array<RendezVous>();
  private praticiens: Array<Praticien> = new Array<Praticien>();
  private motifs: Array<Motif> = new Array<Motif>();
  private lieux: Array<Lieu> = new Array<Lieu>();
  private modalites: Array<Modalite> = new Array<Modalite>();
  private creneaux: Array<CreneauDisponible> = new Array<CreneauDisponible>();
  private specialites: Array<Specialite> = new Array<Specialite>();
  private utilisateur: Utilisateur = new Utilisateur(1, 0, "test@gmail.com", "0559812757", this.date, "1234");
  private patient: Patient = new Patient(1, 0, false, "Massé", "Grégoire", this.date, this.date, this.utilisateur, this.rendezvouslist);
  private praticien: Praticien = new Praticien(1, 0, "Varvat", "Simon", true, true, this.specialites, this.lieux, this.modalites, this.creneaux, this.utilisateur);
  private specialite: Specialite = new Specialite(1, 0, "Dentiste", this.praticiens, this.motifs);
  private motif: Motif = new Motif(1, 0, "Rhume", this.specialite, this.modalites);
  private modalite: Modalite = new Modalite(1, 0, 10, 1, 2, true, this.praticien, this.rendezvouslist, this.motif);
  private rendezvous: RendezVous = new RendezVous(1, 0, true, this.utilisateur, this.patient, this.modalite, this.creneaux);
  private lieu: Lieu = new Lieu(1, 0, "Domicile", this.adresse);
  private creneaudisponible: CreneauDisponible = new CreneauDisponible(1, 0, this.date, this.date, this.lieu, this.praticien, this.rendezvous);


  constructor() {
    this.creneaux.push(this.creneaudisponible);
    this.rendezvouslist.push(this.rendezvous);
    this.praticiens.push(this.praticien);
    this.motifs.push(this.motif);
    this.lieux.push(this.lieu);
    this.modalites.push(this.modalite);
    this.specialites.push(this.specialite);
  }


  findRendezvousById(id: number): RendezVous{
    return this.rendezvous
  }


  findHeureDebutRendezvous(id: number): Date {

  let rendezvousTrouve = this.findRendezvousById(id);
  let heureDebut = rendezvousTrouve.creneaux[0].debut;

  for(let creneau of rendezvousTrouve.creneaux){
    if(creneau.debut < heureDebut){
      heureDebut = creneau.debut;
    }
  }
  return heureDebut;
  }

  findHeureFinRendezvous(id: number): Date {

    let rendezvousTrouve = this.findRendezvousById(id);
    let heureFin = rendezvousTrouve.creneaux[0].fin;

    for(let creneau of rendezvousTrouve.creneaux){
      if(creneau.debut > heureFin){
        heureFin = creneau.debut;
      }
    }
    return heureFin;
  }



}
