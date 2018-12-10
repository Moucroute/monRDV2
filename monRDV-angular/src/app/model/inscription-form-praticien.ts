export class InscriptionFormPraticien {

  nom: string ;
  prenom:string ;
  telephone:string ;
  motDePasse:string ;
  confirmationMotDePasse:string ;
  email: string ;
  prendCarteVitale:boolean ;
  specialites : Array<Specialite> = new Array<>();
  specialite:string ;


  constructor(nom?: string, prenom?: string, telephone?: string, motDePasse?: string, confirmationMotDePasse?: string, email?: string, prendCarteVitale?: boolean, specialites?: Array<Specialite>, specialite: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.telephone = telephone;
    this.motDePasse = motDePasse;
    this.confirmationMotDePasse = confirmationMotDePasse;
    this.email = email;
    this.prendCarteVitale = prendCarteVitale;
    this.specialites = specialites;
    this.specialite = specialite;
  }

}
