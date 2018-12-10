import {RendezVous} from './rendez-vous';
import {Utilisateur} from './utilisateur';

export class Patient {
  private _id: number;
  private _version: number;
  private _defaut: boolean;
  private _nom: string;
  private _prenom: string;
  private _dateNaissance: Date = new Date();
  private _dateCreation: Date = new Date();
  private _utilisateur: Utilisateur;
  private _rendezVous: Array<RendezVous> = new Array<RendezVous>();


  constructor(id?: number, version?: number, defaut?: boolean, nom?: string, prenom?: string, dateNaissance?: Date, dateCreation?: Date, utilisateur?: Utilisateur, rendezVous?: Array<RendezVous>) {
    this._id = id;
    this._version = version;
    this._defaut = defaut;
    this._nom = nom;
    this._prenom = prenom;
    this._dateNaissance = dateNaissance;
    this._dateCreation = dateCreation;
    this._utilisateur = utilisateur;
    this._rendezVous = rendezVous;
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

  get defaut(): boolean {
    return this._defaut;
  }

  set defaut(value: boolean) {
    this._defaut = value;
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

  get dateNaissance(): Date {
    return this._dateNaissance;
  }

  set dateNaissance(value: Date) {
    this._dateNaissance = value;
  }

  get dateCreation(): Date {
    return this._dateCreation;
  }

  set dateCreation(value: Date) {
    this._dateCreation = value;
  }

  get utilisateur(): Utilisateur {
    return this._utilisateur;
  }

  set utilisateur(value: Utilisateur) {
    this._utilisateur = value;
  }

  get rendezVous(): Array<RendezVous> {
    return this._rendezVous;
  }

  set rendezVous(value: Array<RendezVous>) {
    this._rendezVous = value;
  }
}

