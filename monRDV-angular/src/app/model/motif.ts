import {RendezVous} from './rendez-vous';
import {Modalite} from './modalite';
import {Specialite} from './specialite';

export class Motif {
  private _id: number;
  private _version: number;
  private _libelle: string;
  private _specialite: Specialite;
  private _modalites: Array<Modalite> = new Array<Modalite>();


  constructor(id?: number, version?: number, libelle?: string, specialite?: Specialite, modalites?: Array<Modalite>) {
    this._id = id;
    this._version = version;
    this._libelle = libelle;
    this._specialite = specialite;
    this._modalites = modalites;
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

  get specialite(): Specialite {
    return this._specialite;
  }

  set specialite(value: Specialite) {
    this._specialite = value;
  }

  get modalites(): Array<Modalite> {
    return this._modalites;
  }

  set modalites(value: Array<Modalite>) {
    this._modalites = value;
  }
}
