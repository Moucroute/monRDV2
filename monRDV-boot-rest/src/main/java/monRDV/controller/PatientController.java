package monRDV.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import monRDV.model.CreneauDisponible;
import monRDV.model.InscriptionFormPatient;
import monRDV.model.Patient;
import monRDV.model.PatientForm;
import monRDV.model.Profil;
import monRDV.model.RendezVous;
import monRDV.model.Utilisateur;
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
	
	@GetMapping({"/monComptePatient/{id}"})
	@JsonView(Views.ViewPatient.class)
	public Patient findPatients(@PathVariable Long id) {
		return repoPatient.findPatientDefaut(id); 
	}

	
	//Ci dessous, pour afficher la liste des patients
	@GetMapping({"/monComptePatient/{id}/MesPatients"})
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
////	@GetMapping("/edit")
////	public String edit(@RequestParam Long id, Model model) {
////		model.addAttribute("page", "patient");
////		Optional<Patient> opt = repoPatient.findById(id);
////		if (opt.isPresent()) {
////			model.addAttribute("patient", opt.get());
////		} else {
////			model.addAttribute("patient", new Patient());
////		}
////
////		return "patient/mesInfosPatient";
////	}
//
//	@GetMapping("/editMesInfosPatient")
//	public String editInfosPatients(@RequestParam Long id, Model model) {
//		List<Patient> patientsUt = new ArrayList<Patient>();
//
//		model.addAttribute("page", "patient");
//		Utilisateur utilisateur = repoUtilisateur.findWithPatients(id);
//		if (utilisateur != null) {
//			for (Patient patient : utilisateur.getPatients()) {
//				if (patient.getDefaut()) {
//					PatientForm patientForm = new PatientForm(patient.getId(), patient.getNom(), patient.getPrenom());
//					patientForm.setEmail(patient.getUtilisateur().getEmail());
//					patientForm.setMotDePasse(patient.getUtilisateur().getMotDePasse());
//					patientForm.setTelephone(patient.getUtilisateur().getTelephone());
//					model.addAttribute("patient", patientForm);
//				} else {
//					patientsUt.add(patient);
//				}
//			}
//		} else {
//			model.addAttribute("patient", new PatientForm());
//		}
//
//		model.addAttribute("patientsUt", patientsUt);
//
//		return "patient/mesInfosPatient";
//	}
//
//	@PostMapping("/save")
//	public String save(@ModelAttribute("patient") @Valid PatientForm patientForm, BindingResult result, Model model) {
//
//		if (result.hasErrors()) {
//			model.addAttribute("page", "patient");
//			model.addAttribute("patients", repoPatient.findAll());
//
//			return "patient/mesInfosPatient";
//		}
//
//		Optional<Patient> optp = repoPatient.findById(patientForm.getId());
//
//		if (optp.isPresent()) {
//			Patient patient = optp.get();
//
//			Optional<Utilisateur> optu = repoUtilisateur.findById(patient.getUtilisateur().getId());
//
//			patient.setNom(patientForm.getNom());
//			patient.setPrenom(patientForm.getPrenom());
//
//			repoPatient.save(patient);
//
//			if (optu.isPresent()) {
//				Utilisateur utilisateur = optu.get();
//
//				utilisateur.setEmail(patientForm.getEmail());
//				utilisateur.setMotDePasse(patientForm.getMotDePasse());
//				utilisateur.setTelephone(patientForm.getTelephone());
//
//				repoUtilisateur.save(utilisateur);
//			}
//
//		}
//
//		return "forward:editMesInfosPatient";
//	}
//
//	@GetMapping("/delete")
//	public String delete(@RequestParam Long id) {
//		Optional<Patient> opt = repoPatient.findById(id);
//
//		if (opt.isPresent()) {
//			repoPatient.delete(opt.get());
//		}
//
//		return "forward:list";
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
