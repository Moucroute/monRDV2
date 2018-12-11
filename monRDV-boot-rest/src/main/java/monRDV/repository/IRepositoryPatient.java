package monRDV.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import monRDV.model.Patient;
import monRDV.model.RendezVous;

public interface IRepositoryPatient extends JpaRepository<Patient, Long> {
	
	//Requete find patient with default == true car c'est l'utilisateur
	@Query("select p from Patient p join p.utilisateur u where u.id = :id and p.defaut = true")
	Patient findPatientDefaut(@Param("id") Long identifiantUtilisateur);

	@Query("select p from Patient p join p.utilisateur u where u.id = :id")
	List<Patient> findByUtilisateur(@Param("id") Long identifiantUtilisateur);

	
	
//	@Query("select p from Patient p join p.RendezVous rdv where rdv.id = :id")
//	Patient findByRdv(@Param("id") Long identifiantRdv);
	
//	@Query("select p from Patient p join p.RendezVous p.rdv join  where rdv.id = :id")
//	List<Patient> findViaRdvByUtilisateur(@Param("id") Long identifiantUtilisateur);


}
