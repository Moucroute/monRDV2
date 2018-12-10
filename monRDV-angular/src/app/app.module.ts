import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PatientMesPatientsHttpService} from './patient-mes-patients/patient-mes-patients-http.service';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import {PatientCalendrierComponent} from './patient-calendrier/patient-calendrier.component';
import {InscriptionFormPatientComponent} from './model/inscription-form-patient/inscription-form-patient.component';
import {PatientDonneesUtilisateurComponent} from './patient-donnees-utilisateur/patient-donnees-utilisateur.component';
import {PatientDonneesUtilisateurHttpService} from './patient-donnees-utilisateur/patient-donnees-utilisateur-http.service';
import {PatientRdvInformationComponent} from './patient-rdv-information/patient-rdv-information.component';
import {PatientRdvInformationHttpService} from './patient-rdv-information/patient-rdv-information-http.service';
import {PatientCalendrierHttpService} from './patient-calendrier/patient-calendrier-http.service';



const routes: Routes = [
  {path: 'patient/mesrdvavenir', component: PatientCalendrierComponent},
  {path: 'patient/mesrdvpasses', component: PatientRdvInformationComponent},
  {path: 'patient/mesinfos', component: PatientDonneesUtilisateurComponent},
  {path: '', redirectTo: 'patient/mesrdvavenir', pathMatch: 'full'}
];

<<<<<<< Updated upstream
=======
import { AppComponent } from './app.component';
import { PatientCalendrierComponent } from './patient-calendrier/patient-calendrier.component';
import {PatientCalendrierHttpService} from './patient-calendrier/patient-calendrier-http.service';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    PatientDonneesUtilisateurComponent,
    InscriptionFormPatientComponent,
    PatientCalendrierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
<<<<<<< Updated upstream
  providers: [PatientMesPatientsHttpService, PatientRdvInformationHttpService,
    PatientCalendrierHttpService, PatientDonneesUtilisateurHttpService],
=======
  providers: [
    PatientCalendrierHttpService
  ],
>>>>>>> Stashed changes
  bootstrap: [AppComponent]
})
export class AppModule {
}
