export class InscriptionFormPatient {

  nom: string;
  prenom: string;
  dtNaissance: Date;
  telephone: string;
  motDePasse: string;
  confirmationMotDePasse: string;
  email: string;
  confirmationEmail: string;


  constructor(nom?: string, prenom?: string, dtNaissance?: Date, telephone?: string, motDePasse?: string, confirmationMotDePasse?: string, email?: string, confirmationEmail?: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.dtNaissance = dtNaissance;
    this.telephone = telephone;
    this.motDePasse = motDePasse;
    this.confirmationMotDePasse = confirmationMotDePasse;
    this.email = email;
    this.confirmationEmail = confirmationEmail;
  }

}
