import {Specialite} from './specialite';

export class InscriptionFormPraticien {
  private _nom: string;
  private _prenom: string;
  private _telephone: string;
  private _motDePasse: string;
  private _confirmationMotDePasse: string;
  private _email: string;
  private _prendCarteVitale: boolean;
  private _specialite: Specialite;
  private _specialites: Array<Specialite> = new Array<Specialite>();


  constructor(nom?: string, prenom?: string, telephone?: string, motDePasse?: string, confirmationMotDePasse?: string, email?: string, prendCarteVitale?: boolean, specialite?: Specialite, specialites?: Array<Specialite>) {
    this._nom = nom;
    this._prenom = prenom;
    this._telephone = telephone;
    this._motDePasse = motDePasse;
    this._confirmationMotDePasse = confirmationMotDePasse;
    this._email = email;
    this._prendCarteVitale = prendCarteVitale;
    this._specialite = specialite;
    this._specialites = specialites;
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

  get telephone(): string {
    return this._telephone;
  }

  set telephone(value: string) {
    this._telephone = value;
  }

  get motDePasse(): string {
    return this._motDePasse;
  }

  set motDePasse(value: string) {
    this._motDePasse = value;
  }

  get confirmationMotDePasse(): string {
    return this._confirmationMotDePasse;
  }

  set confirmationMotDePasse(value: string) {
    this._confirmationMotDePasse = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get prendCarteVitale(): boolean {
    return this._prendCarteVitale;
  }

  set prendCarteVitale(value: boolean) {
    this._prendCarteVitale = value;
  }

  get specialite(): Specialite {
    return this._specialite;
  }

  set specialite(value: Specialite) {
    this._specialite = value;
  }

  get specialites(): Array<Specialite> {
    return this._specialites;
  }

  set specialites(value: Array<Specialite>) {
    this._specialites = value;
  }
}
