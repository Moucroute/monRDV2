import {RendezVous} from './rendezVous';
import {Motif} from './motif';
import {Praticien} from './praticien';

export class Modalite {
  private _id: number;
  private _version: number;
  private _prix: number;
  private _duree: number;
  private _delaiAnnulation: number;
  private _depassementHonoraires: boolean;
  private _praticien: Praticien;
  private _rendezVous: Array<RendezVous> = new Array<RendezVous>();
  private _motif: Motif;


  constructor(id?: number, version?: number, prix?: number, duree?: number, delaiAnnulation?: number, depassementHonoraires?: boolean, praticien?: Praticien, rendezVous?: Array<RendezVous>, motif?: Motif) {
    this._id = id;
    this._version = version;
    this._prix = prix;
    this._duree = duree;
    this._delaiAnnulation = delaiAnnulation;
    this._depassementHonoraires = depassementHonoraires;
    this._praticien = praticien;
    this._rendezVous = rendezVous;
    this._motif = motif;
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

  get prix(): number {
    return this._prix;
  }

  set prix(value: number) {
    this._prix = value;
  }

  get duree(): number {
    return this._duree;
  }

  set duree(value: number) {
    this._duree = value;
  }

  get delaiAnnulation(): number {
    return this._delaiAnnulation;
  }

  set delaiAnnulation(value: number) {
    this._delaiAnnulation = value;
  }

  get depassementHonoraires(): boolean {
    return this._depassementHonoraires;
  }

  set depassementHonoraires(value: boolean) {
    this._depassementHonoraires = value;
  }

  get praticien(): Praticien {
    return this._praticien;
  }

  set praticien(value: Praticien) {
    this._praticien = value;
  }

  get rendezVous(): Array<RendezVous> {
    return this._rendezVous;
  }

  set rendezVous(value: Array<RendezVous>) {
    this._rendezVous = value;
  }

  get motif(): Motif {
    return this._motif;
  }

  set motif(value: Motif) {
    this._motif = value;
  }
}
