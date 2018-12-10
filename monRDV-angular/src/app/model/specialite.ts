import {CreneauDisponible} from './creneau-disponible';
import {Praticien} from './praticien';
import {Motif} from './motif';

export class Specialite {
  private _id: number;
  private _version: number;
  private _libelle: string;
  private _praticiens: Array<Praticien> = new Array<Praticien>();
  private _motifs: Array<Motif> = new Array<Motif>();


  constructor(id?: number, version?: number, libelle?: string, praticiens?: Array<Praticien>, motifs?: Array<Motif>) {
    this._id = id;
    this._version = version;
    this._libelle = libelle;
    this._praticiens = praticiens;
    this._motifs = motifs;
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

  get libelle(): string {
    return this._libelle;
  }

  set libelle(value: string) {
    this._libelle = value;
  }

  get praticiens(): Array<Praticien> {
    return this._praticiens;
  }

  set praticiens(value: Array<Praticien>) {
    this._praticiens = value;
  }

  get motifs(): Array<Motif> {
    return this._motifs;
  }

  set motifs(value: Array<Motif>) {
    this._motifs = value;
  }
}
