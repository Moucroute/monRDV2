import {Utilisateur} from './utilisateur';
import {Patient} from './patient';
import {CreneauDisponible} from './creneauDisponible';
import {Modalite} from './modalite';

export class RendezVous {
  private _id: number;
  private _version: number;
  private _statut: boolean;
  private _utilisateur: Utilisateur;
  private _patient: Patient;
  private _modalite: Modalite;
  private _creneaux: Array<CreneauDisponible> = new Array<CreneauDisponible>();


  constructor(id?: number, version?: number, statut?: boolean, utilisateur?: Utilisateur, patient?: Patient, modalite?: Modalite, creneaux?: Array<CreneauDisponible>) {
    this._id = id;
    this._version = version;
    this._statut = statut;
    this._utilisateur = utilisateur;
    this._patient = patient;
    this._modalite = modalite;
    this._creneaux = creneaux;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get version(): number {
    return this._version;
  }

  set version(value: number) {
    this._version = value;
  }

  get statut(): boolean {
    return this._statut;
  }

  set statut(value: boolean) {
    this._statut = value;
  }

  get utilisateur(): Utilisateur {
    return this._utilisateur;
  }

  set utilisateur(value: Utilisateur) {
    this._utilisateur = value;
  }

  get patient(): Patient {
    return this._patient;
  }

  set patient(value: Patient) {
    this._patient = value;
  }

  get modalite(): Modalite {
    return this._modalite;
  }

  set modalite(value: Modalite) {
    this._modalite = value;
  }

  get creneaux(): Array<CreneauDisponible> {
    return this._creneaux;
  }

  set creneaux(value: Array<CreneauDisponible>) {
    this._creneaux = value;
  }
}


