import {Motif} from './motif';

export class RendezVousEnAttente {
  private _dtRdv: Date;
  private _duree: number;
  private _motif: Motif;
  private _nom: string;
  private _prenom: string;


  constructor(dtRdv?: Date, duree?: number, motif?: Motif, nom?: string, prenom?: string) {
    this._dtRdv = dtRdv;
    this._duree = duree;
    this._motif = motif;
    this._nom = nom;
    this._prenom = prenom;
  }


  get dtRdv(): Date {
    return this._dtRdv;
  }

  set dtRdv(value: Date) {
    this._dtRdv = value;
  }

  get duree(): number {
    return this._duree;
  }

  set duree(value: number) {
    this._duree = value;
  }

  get motif(): Motif {
    return this._motif;
  }

  set motif(value: Motif) {
    this._motif = value;
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
}
