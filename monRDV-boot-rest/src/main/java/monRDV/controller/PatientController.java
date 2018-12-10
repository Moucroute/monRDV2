package monRDV.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import monRDV.model.Patient;
import monRDV.model.Views;
import monRDV.repository.IRepositoryCreneauDisponible;
import monRDV.repository.IRepositoryPatient;
import monRDV.repository.IRepositoryRendezVous;
import monRDV.repository.IRepositoryUtilisateur;

@RestController
@RequestMapping("/patient")
@CrossOrigin("*")
public class PatientController {
	@Autowired
	private IRepositoryPatient repoPatient;
	@Autowired
	private IRepositoryUtilisateur repoUtilisateur;
	
	@Autowired
	private IRepositoryRendezVous repoRendezVous;
	@Autowired
	
	private IRepositoryCreneauDisponible repoCreneauDisponible;


	public PatientController() {
		super();

	}

	
	//Ci dessous, pour afficher les infos du compte Patient
	
	@GetMapping("/monComptePatient/{id}")
	@JsonView(Views.ViewPatient.class)
	public Patient findPatients(@PathVariable Long id) {
		return repoPatient.findPatientDefaut(id); 
	}

	
	//Ci dessous, pour afficher la liste des patients
	@GetMapping("/monComptePatient/{id}/MesPatients")
	@JsonView(Views.ViewPatient.class)
	public List<Patient> findPatientDefaut(@PathVariable Long id) {
		return repoUtilisateur.findPatientsByUtilisateur(id); 
	}

	
	//Ci dessous, pour ajouter des nouveaux patients depuis le compte Patient
	@PostMapping("/monComptePatient/{id}/MesPatients/addPatient")
	@JsonView(Views.ViewPatient.class)
	public Patient create(@RequestBody Patient patient) {
		return repoPatient.save(patient);
	}
	
	@PutMapping("/monComptePatient/{id}/MesModifs") 
	@JsonView(Views.ViewPatient.class)
	public Patient update(@PathVariable Long id, @RequestBody Patient patient) {
		return repoPatient.save(patient);
	}
	
	@DeleteMapping("/monComptePatient/MesPatientsDelete/{id}")
	@JsonView(Views.ViewPatient.class)
	public void delete(@PathVariable Long id) {
		
		try {
			repoPatient.deleteById(id);
		}
		
		catch(Exception e) {
			
			System.out.println("supprimer rdv avant de supprimer le patient");
		}
		
	}


	
	
//	@GetMapping("/inscription")
//	public String inscription(Model model) {
//		model.addAttribute("page", "patient");
//		model.addAttribute("inscriptionFormPatient", new InscriptionFormPatient());
//
//		return "patient/inscriptionPatient";
//	}
//
//	@RequestMapping("/saveInscription")
//	public String saveInscription(
//			@ModelAttribute("inscriptionFormPatient") @Valid InscriptionFormPatient inscriptionFormPatient,
//			BindingResult result, Model model) {
//
//		if (result.hasErrors()) {
//			model.addAttribute("inscriptionFormPatient", inscriptionFormPatient);
//			model.addAttribute("page", "patient");
//			return "patient/inscriptionPatient";
//		} else {
//			model.addAttribute("page", "patient");
//			Patient nouveauPatient = new Patient();
//			nouveauPatient.setNom(inscriptionFormPatient.getNom());
//			nouveauPatient.setPrenom(inscriptionFormPatient.getPrenom());
//			nouveauPatient.setDateCreation(new Date());
//			nouveauPatient.setDefaut(true);
//			nouveauPatient.setDateNaissance(inscriptionFormPatient.getDtNaissance());
//			Utilisateur nouvelUtilisateur = new Utilisateur();
//			nouvelUtilisateur.setTelephone(inscriptionFormPatient.getTelephone());
//			nouvelUtilisateur.setProfil(Profil.Patient);
//			nouvelUtilisateur.setDateCreation(new Date());
//			nouvelUtilisateur.setEmail(inscriptionFormPatient.getEmail());
//			nouvelUtilisateur.setMotDePasse(inscriptionFormPatient.getMotDePasse());
//
//			repoPatient.save(nouveauPatient);
//			repoUtilisateur.save(nouvelUtilisateur);
//
//			return "patient/inscriptionPatientValidation";
//		}
//	}




//
//	@RequestMapping("/connexion")
//	public String connexion(@ModelAttribute("utilisateur") @Valid Utilisateur utilisateur, BindingResult result,
//			Model model) {
//		if (repoUtilisateur.findWithEmail(utilisateur.getEmail()) != null) {
//			Utilisateur nouvelUtilisateur = repoUtilisateur.findWithEmail(utilisateur.getEmail());
//			if (nouvelUtilisateur.getMotDePasse().equals(utilisateur.getMotDePasse())) {
//				System.out.println(
//						"00000000000000000000000000000000 L'utilisateur est connecté!!! 0000000000000000000000000000000000");
//				return "patient/inscriptionPatientValidation";
//			} else {
//				System.out.println(
//						"00000000000000000000000000000000 Le mot de passe n'est pas correct!! 0000000000000000000000000000000000  "
//								+ nouvelUtilisateur.getMotDePasse() + " = " + utilisateur.getMotDePasse());
//
//				return "patient/inscriptionPatientValidation";
//
//			}
//
//		} else
//
//		{
//			System.out.println(
//					"00000000000000000000000000000000 L'utilisateur n'existe pas 0000000000000000000000000000000000");
//			return "patient/inscriptionPatientValidation";
//		}
//	}
//
//	@RequestMapping("/seConnecter")
//	public String seConnecter(Model model) {
//		model.addAttribute("page", "patient");
//		model.addAttribute("utilisateur", new Utilisateur());
//
//		return "home/connexion";
//	}
//	
//	@GetMapping("/rdvAVenir")
//	public String list(@RequestParam Long id, Model model) {
//		
//		List<RendezVous> rendezvouss = repoRendezVous.findByUtilisateur(id);
//		model.addAttribute("rdvAVenirRDV", rendezvouss);
//		
//		List<CreneauDisponible> creneaux = repoCreneauDisponible.findByUtilisateur(id);
//		model.addAttribute("rdvAVenirCreneaux", creneaux);
//		
//		
//		return "patient/patientRDVAVenir"; 
//	}
}
