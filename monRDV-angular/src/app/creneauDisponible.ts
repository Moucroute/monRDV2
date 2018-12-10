import {RendezVous} from './rendezVous';
import {Lieu} from './lieu';
import {Praticien} from './praticien';

export class CreneauDisponible {
  private _id: number;
  private _version: number;
  private _debut: Date;
  private _lieu: Lieu;
  private _praticien: Praticien;
  private _rendezVous: RendezVous;

  constructor(id?: number, version?: number, debut?: Date, lieu?: Lieu, praticien?: Praticien, rendezVous?: RendezVous) {
    this._id = id;
    this._version = version;
    this._debut = debut;
    this._lieu = lieu;
    this._praticien = praticien;
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

  get debut(): Date {
    return this._debut;
  }

  set debut(value: Date) {
    this._debut = value;
  }

  get lieu(): Lieu {
    return this._lieu;
  }

  set lieu(value: Lieu) {
    this._lieu = value;
  }

  get praticien(): Praticien {
    return this._praticien;
  }

  set praticien(value: Praticien) {
    this._praticien = value;
  }

  get rendezVous(): RendezVous {
    return this._rendezVous;
  }

  set rendezVous(value: RendezVous) {
    this._rendezVous = value;
  }
}
