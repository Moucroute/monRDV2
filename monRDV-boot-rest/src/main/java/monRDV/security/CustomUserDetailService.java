package monRDV.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import monRDV.model.Utilisateur;
import monRDV.repository.IRepositoryUtilisateur;



@Service
public class CustomUserDetailService implements UserDetailsService {

	@Autowired
	private IRepositoryUtilisateur repoUtilisateur;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Utilisateur utilisateur = repoUtilisateur.findByLogin(email);

		UserBuilder builder = null;
		if (utilisateur != null) {
			builder = org.springframework.security.core.userdetails.User.withUsername(email);
			builder.password(new BCryptPasswordEncoder().encode(utilisateur.getMotDePasse()));
			builder.roles(utilisateur.getProfil().name());
		} else {
			throw new UsernameNotFoundException("User not found.");
		}

		return builder.build();
	}

}
