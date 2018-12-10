
export class InscriptionFormPatient {
  private _nom: string;
  private _prenom: string;
  private _dtNaissance: Date;
  private _telephone: string;
  private _motDePasse: string;
  private _confirmationMotDePasse: string;
  private _email: string;
  private _confirmationEmail: string;


  constructor(nom?: string, prenom?: string, dtNaissance?: Date, telephone?: string, motDePasse?: string, confirmationMotDePasse?: string, email?: string, confirmationEmail?: string) {
    this._nom = nom;
    this._prenom = prenom;
    this._dtNaissance = dtNaissance;
    this._telephone = telephone;
    this._motDePasse = motDePasse;
    this._confirmationMotDePasse = confirmationMotDePasse;
    this._email = email;
    this._confirmationEmail = confirmationEmail;
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

  get dtNaissance(): Date {
    return this._dtNaissance;
  }

  set dtNaissance(value: Date) {
    this._dtNaissance = value;
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

  get confirmationEmail(): string {
    return this._confirmationEmail;
  }

  set confirmationEmail(value: string) {
    this._confirmationEmail = value;
  }
}
