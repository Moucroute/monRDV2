import {Adresse} from './adresse';
import {RendezVous} from './rendez-vous';
import {CreneauDisponible} from './creneau-disponible';
import {Praticien} from './praticien';

export class Lieu {
  private _id: number;
  private _version: number;
  private _nom: string;
  private _adresse: Adresse;
  private _praticien: Praticien;
  private _creneaux: Array<CreneauDisponible> = new Array<CreneauDisponible>();


  constructor(id?: number, version?: number, nom?: string, adresse?: Adresse, praticien?: Praticien, creneaux?: Array<CreneauDisponible>) {
    this._id = id;
    this._version = version;
    this._nom = nom;
    this._adresse = adresse;
    this._praticien = praticien;
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

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get adresse(): Adresse {
    return this._adresse;
  }

  set adresse(value: Adresse) {
    this._adresse = value;
  }

  get praticien(): Praticien {
    return this._praticien;
  }

  set praticien(value: Praticien) {
    this._praticien = value;
  }

  get creneaux(): Array<CreneauDisponible> {
    return this._creneaux;
  }

  set creneaux(value: Array<CreneauDisponible>) {
    this._creneaux = value;
  }
}
