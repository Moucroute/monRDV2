export class JourCalendrier {
  private _num: number;
  private _annee: number;
  private _mois: number;
  private _libelle: string;


  constructor(num?: number, annee?: number, mois?: number, libelle?: string) {
    this._num = num;
    this._annee = annee;
    this._mois = mois;
    this._libelle = libelle;
  }


  get num(): number {
    return this._num;
  }

  set num(value: number) {
    this._num = value;
  }

  get annee(): number {
    return this._annee;
  }

  set annee(value: number) {
    this._annee = value;
  }

  get mois(): number {
    return this._mois;
  }

  set mois(value: number) {
    this._mois = value;
  }

  get libelle(): string {
    return this._libelle;
  }

  set libelle(value: string) {
    this._libelle = value;
  }
}
