import {Modalite} from './modalite';
import {Lieu} from './lieu';
import {CreneauDisponible} from './creneau-disponible';
import {Utilisateur} from './utilisateur';
import {Specialite} from './specialite';

export class Praticien {
  private _id: number;
  private _version: number;
  private _nom: string;
  private _prenom: string;
  private _prendCarteVitale: boolean;
  private _validationAuto: boolean;
  private _specialites: Array<Specialite> = new Array<Specialite>();
  private _lieux: Array<Lieu> = new Array<Lieu>();
  private _modalites: Array<Modalite> = new Array<Modalite>();
  private _creneaux: Array<CreneauDisponible> = new Array<CreneauDisponible>();
  private _utilisateur: Utilisateur;


  constructor(id?: number, version?: number, nom?: string, prenom?: string, prendCarteVitale?: boolean, validationAuto?: boolean, specialites?: Array<Specialite>, lieux?: Array<Lieu>, modalites?: Array<Modalite>, creneaux?: Array<CreneauDisponible>, utilisateur?: Utilisateur) {
    this._id = id;
    this._version = version;
    this._nom = nom;
    this._prenom = prenom;
    this._prendCarteVitale = prendCarteVitale;
    this._validationAuto = validationAuto;
    this._specialites = specialites;
    this._lieux = lieux;
    this._modalites = modalites;
    this._creneaux = creneaux;
    this._utilisateur = utilisateur;
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

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get prendCarteVitale(): boolean {
    return this._prendCarteVitale;
  }

  set prendCarteVitale(value: boolean) {
    this._prendCarteVitale = value;
  }

  get validationAuto(): boolean {
    return this._validationAuto;
  }

  set validationAuto(value: boolean) {
    this._validationAuto = value;
  }

  get specialites(): Array<Specialite> {
    return this._specialites;
  }

  set specialites(value: Array<Specialite>) {
    this._specialites = value;
  }

  get lieux(): Array<Lieu> {
    return this._lieux;
  }

  set lieux(value: Array<Lieu>) {
    this._lieux = value;
  }

  get modalites(): Array<Modalite> {
    return this._modalites;
  }

  set modalites(value: Array<Modalite>) {
    this._modalites = value;
  }

  get creneaux(): Array<CreneauDisponible> {
    return this._creneaux;
  }

  set creneaux(value: Array<CreneauDisponible>) {
    this._creneaux = value;
  }

  get utilisateur(): Utilisateur {
    return this._utilisateur;
  }

  set utilisateur(value: Utilisateur) {
    this._utilisateur = value;
  }
}
