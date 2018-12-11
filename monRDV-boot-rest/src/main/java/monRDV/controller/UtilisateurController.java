package monRDV.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import monRDV.model.Utilisateur;
import monRDV.model.Views;
import monRDV.repository.IRepositoryUtilisateur;


@RestController
@RequestMapping("/utilisateur")
@CrossOrigin("*")
public class UtilisateurController {
	
	
	@Autowired
	private IRepositoryUtilisateur repoUtilisateur;
	
	public UtilisateurController() {
		super();

	}

	

	@GetMapping("/connexion/{email}/{motDePasse}")
	@JsonView(Views.ViewUtilisateur.class)
	public  Utilisateur connexion(@PathVariable("email") String email,@PathVariable("motDePasse") String motDePasse){
		

//			if((repoUtilisateur.findMotDePasse(motDePasse)!= null) && (repoUtilisateur.findUtilisateur(email) != null)) {
//				return repoUtilisateur.findUtilisateur(email);
//				}
		
		
	
			return repoUtilisateur.findUtilisateurByEmailAndMotDePasse(email, motDePasse);
	


}
	@PostMapping("")
	@JsonView(Views.ViewUtilisateur.class)
	public Utilisateur create(@RequestBody Utilisateur utilisateur) {
		return repoUtilisateur.save(utilisateur);
	}
}


