package monRDV.model;

public class Views {
	
	public static class ViewCommon {

	}

	
	public static class ViewUtilisateur extends ViewCommon {

	}
	
	public static class ViewPatient extends ViewUtilisateur {

	}
	
	public static class ViewUtilisateurWithRendezVous extends ViewPatient {

	}
	
	
	public static class ViewCreneauDisponible extends ViewUtilisateurWithRendezVous {

	}
	
	public static class ViewCreneauDisponibleWithPraticien  extends ViewCreneauDisponible {

	}
	
	
	public static class ViewCreneauDisponibleWithLieu  extends ViewCreneauDisponible {

	}
	
	
	public static class ViewHistorique  extends ViewCommon {

	}
	
	
	
	
	public static class ViewPraticien extends ViewUtilisateur {

	}
	
	
	
	

}
