package monRDV.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import monRDV.model.Patient;
import monRDV.model.Utilisateur;

public interface IRepositoryUtilisateur extends JpaRepository<Utilisateur, Long> {
	
	@Query("select p from Patient p join p.utilisateur u where u.id = :id and p.defaut = false")
	List<Patient> findPatientsByUtilisateur(@Param("id") Long identifiantUtilisateur);

	@Query("select u from Utilisateur u left join fetch u.patients p where u.id = :id")
	public Utilisateur findWithPatients(@Param("id") Long id);
	
	@Query("select u from Utilisateur u where u.email = :email")
	public Utilisateur findWithEmail(@Param("email") String email);
	
	
	@Query("select u from Utilisateur u where u.email = :email")
	public Utilisateur findUtilisateur(@Param("email") String email);
	
	@Query("select u from Utilisateur u where u.motDePasse = :motDePasse")
	public Utilisateur findMotDePasse(@Param("motDePasse") String motDePasse);
	
	@Query("select u from Utilisateur u ")
	public Utilisateur findUser();
}
