import {RendezVous} from '../model/rendez-vous';

export class JourCalendrier {
  private _num: number;
  private _annee: number;
  private _mois: number;
  private _libelle: string;
  private _dateComplete: Date;
  private _rendezVousduJour: Array<RendezVous>;

  constructor(num?: number, annee?: number, mois?: number, libelle?: string, dateComplete?: Date) {
    this._num = num;
    this._annee = annee;
    this._mois = mois;
    this._libelle = libelle;
    this._dateComplete = dateComplete;
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

  get dateComplete(): Date {
    return this._dateComplete;
  }

  set dateComplete(value: Date) {
    this._dateComplete = value;
  }
}
