import {Profil} from './profil';


export class Utilisateur {
  private _id: number;
  private _version: number;
  private _email: string;
  private _telephone: string;
  private _dateCreation: Date;
  private _motDePasse: string;
  private _profil: Profil;


  constructor(id?: number, version?: number, email?: string, telephone?: string, dateCreation?: Date, motDePasse?: string, profil?: Profil) {
    this._id = id;
    this._version = version;
    this._email = email;
    this._telephone = telephone;
    this._dateCreation = dateCreation;
    this._motDePasse = motDePasse;
    this._profil = profil;
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

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get telephone(): string {
    return this._telephone;
  }

  set telephone(value: string) {
    this._telephone = value;
  }

  get dateCreation(): Date {
    return this._dateCreation;
  }

  set dateCreation(value: Date) {
    this._dateCreation = value;
  }

  get motDePasse(): string {
    return this._motDePasse;
  }

  set motDePasse(value: string) {
    this._motDePasse = value;
  }

  get profil(): Profil {
    return this._profil;
  }

  set profil(value: Profil) {
    this._profil = value;
  }
}
