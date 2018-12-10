package monRDV.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonView;



@Entity
@Table(name = "patient")
public class Patient {

	@Id
	@GeneratedValue
	@JsonView(Views.ViewCommon.class)
	private Long id;

	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@Column(name = "defaut")
	@JsonView(Views.ViewCommon.class)
	private Boolean defaut;
	@Column(name = "nom")
	@Size(min=3, max=100, message="Le nom est obligatoire (entre 3 et 100 caractères)")
	@JsonView(Views.ViewCommon.class)
	private String nom;
	@Column(name = "prenom")
	@JsonView(Views.ViewCommon.class)
	private String prenom;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(name = "date_naissance")
	@JsonView(Views.ViewCommon.class)
	private Date dateNaissance;

	@Temporal(TemporalType.DATE)
	@Column(name = "date_creation")
	@JsonView(Views.ViewCommon.class)
	private Date dateCreation;

	@ManyToOne
	@JoinColumn(name = "utilisateur_id")
	@JsonView(Views.ViewPatient.class)
	private Utilisateur utilisateur;

	
	// TO DO
	@OneToMany(mappedBy = "patient")
	private List<RendezVous> rendezVous = new ArrayList<RendezVous>();

	public Patient() {
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


	public Boolean getDefaut() {
		return defaut;
	}

	public void setDefaut(Boolean defaut) {
		this.defaut = defaut;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public Date getDateNaissance() {
		return dateNaissance;
	}

	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}

	public Date getDateCreation() {
		return dateCreation;
	}

	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public List<RendezVous> getRendezVous() {
		return rendezVous;
	}

	public void setRendezVous(List<RendezVous> rendezVous) {
		this.rendezVous = rendezVous;
	}



}
