package monRDV.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name = "creneauDisponible")
public class CreneauDisponible {
	@Id
	@GeneratedValue
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "date_debut")
	@JsonView(Views.ViewCommon.class)
	private Date debut;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "date_fin")
	@JsonView(Views.ViewCommon.class)
	private Date fin;
	@ManyToOne
	@JoinColumn(name = "lieu_id")
	@JsonView(Views.ViewCommon.class)
	private Lieu lieu;
	
	@ManyToOne
	@JsonView(Views.ViewPraticien.class)
	private Praticien praticien;
	
	@ManyToOne
	@JsonView(Views.ViewCreneauDisponible.class)
	private RendezVous rendezVous;

	public CreneauDisponible() {
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

	public Date getDebut() {
		return debut;
	}

	public void setDebut(Date debut) {
		this.debut = debut;
	}

	public Date getFin() {
		return fin;
	}

	public void setFin(Date fin) {
		this.fin = fin;
	}

	public Lieu getLieu() {
		return lieu;
	}

	public void setLieu(Lieu lieu) {
		this.lieu = lieu;
	}

	public Praticien getPraticien() {
		return praticien;
	}

	public void setPraticien(Praticien praticien) {
		this.praticien = praticien;
	}

	public RendezVous getRendezVous() {
		return rendezVous;
	}

	public void setRendezVous(RendezVous rendezVous) {
		this.rendezVous = rendezVous;
	}



}
