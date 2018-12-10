package monRDV.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import sopra.formation.model.Adresse;
import sopra.formation.model.Personne;
import sopra.formation.model.Salle;
import sopra.formation.model.Views;
import sopra.formation.repository.IRepositoryEleve;
import sopra.formation.repository.IRepositorySalle;

@RestController
@RequestMapping("/salle")
@CrossOrigin("*")
public class PatientCalendrierController {

	@Autowired
	private IRepositoryRendezVous repoRendezVous;

	@Autowired
	private IRepositoryEleve repoEleve;

	@GetMapping("")
	@JsonView(Views.ViewSalle.class)
	public List<Salle> list() {
		return repoRendezVous.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewSalleWithPersonnes.class)
	public Salle find(@PathVariable Long id) {
		return repoRendezVous.findWithPersonnes(id);
	}

	@GetMapping("/{id}/personnes")
	@JsonView(Views.ViewPersonne.class)
	public List<Personne> findPersonnes(@PathVariable Long id) {
		return repoEleve.findAllBySalle(id);
	}

	@PostMapping("")
	@JsonView(Views.ViewSalle.class)
	public Salle create(@RequestBody Salle salle) {
		return repoRendezVous.save(salle);
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewSalle.class)
	public Salle update(@PathVariable Long id, @RequestBody Salle salle) {
		return repoRendezVous.save(salle);
	}

	@PatchMapping("/{id}")
	@JsonView(Views.ViewSalle.class)
	public Salle partialUpdate(@PathVariable Long id, @RequestBody Salle salle) {
		Optional<Salle> optSalle = repoRendezVous.findById(salle.getId());

		Salle salleFind = optSalle.get();

		if (salle.getNom() != null) {
			salleFind.setNom(salle.getNom());
		}
		if (salle.getAdresse() != null) {
			Adresse adresse = salleFind.getAdresse() != null ? salleFind.getAdresse() : new Adresse();
			if (salle.getAdresse().getRue() != null) {
				adresse.setRue(salle.getAdresse().getRue());
			}
			if (salle.getAdresse().getCodePostal() != null) {
				adresse.setCodePostal(salle.getAdresse().getCodePostal());
			}
			if (salle.getAdresse().getVille() != null) {
				adresse.setVille(salle.getAdresse().getVille());
			}
			salleFind.setAdresse(adresse);
		}

		return repoRendezVous.save(salleFind);
	}

	@DeleteMapping("/{id}")
	@JsonView(Views.ViewSalle.class)
	public void delete(@PathVariable Long id) {
		repoRendezVous.deleteById(id);
	}

}
