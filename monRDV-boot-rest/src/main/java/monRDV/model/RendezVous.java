package monRDV.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name = "rendezvous")
public class RendezVous {

	@Id
	@GeneratedValue
	@JsonView(Views.ViewCommon.class)
	private Long id;

	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	
	@JsonView(Views.ViewCommon.class)
	private Boolean statut;

	@ManyToOne
	@JoinColumn(name = "utilisateur_id")
	@JsonView(Views.ViewUtilisateur.class)
	private Utilisateur utilisateur;

	
	// TO DO view
	@ManyToOne
	@JoinTable(name = "patient_rendezvous")
	@JsonView(Views.ViewPatient.class)
	private Patient patient;

	@ManyToOne
	@JoinColumn(name = "modalite_id")
	@JsonView(Views.ViewUtilisateur.class)
	private Modalite modalite;

	
	@OneToMany(mappedBy = "rendezVous")
	@JsonView(Views.ViewUtilisateurWithRendezVous.class)
	private List<CreneauDisponible> creneaux = new ArrayList<CreneauDisponible>();

	public RendezVous() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}


	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Modalite getModalite() {
		return modalite;
	}

	public void setModalite(Modalite modalite) {
		this.modalite = modalite;
	}


	public Boolean getStatut() {
		return statut;
	}

	public void setStatut(Boolean statut) {
		this.statut = statut;
	}

	public List<CreneauDisponible> getCreneaux() {
		return creneaux;
	}

	public void setCreneaux(List<CreneauDisponible> creneaux) {
		this.creneaux = creneaux;
	}



}
