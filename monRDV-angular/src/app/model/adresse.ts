export class Adresse {
  private _rue: string;
  private _codePostal: string;
  private _ville: string;
  private _informations: string;


  constructor(rue?: string, codePostal?: string, ville?: string, informations?: string) {
    this._rue = rue;
    this._codePostal = codePostal;
    this._ville = ville;
    this._informations = informations;
  }

  get rue(): string {
    return this._rue;
  }

  set rue(value: string) {
    this._rue = value;
  }

  get codePostal(): string {
    return this._codePostal;
  }

  set codePostal(value: string) {
    this._codePostal = value;
  }

  get ville(): string {
    return this._ville;
  }

  set ville(value: string) {
    this._ville = value;
  }

  get informations(): string {
    return this._informations;
  }

  set informations(value: string) {
    this._informations = value;
  }
}
