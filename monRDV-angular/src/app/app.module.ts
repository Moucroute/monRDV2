import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PatientMesPatientsHttpService} from './patient-mes-patients/patient-mes-patients-http.service';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import {PatientCalendrierComponent} from './patient-calendrier/patient-calendrier.component';
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
import {PatientDonneesUtilisateurComponent} from './patient-donnees-utilisateur/patient-donnees-utilisateur.component';
import {PatientDonneesUtilisateurHttpService} from './patient-donnees-utilisateur/patient-donnees-utilisateur-http.service';
import {PatientRdvInformationComponent} from './patient-rdv-information/patient-rdv-information.component';
import {PatientRdvInformationHttpService} from './patient-rdv-information/patient-rdv-information-http.service';
import {PatientCalendrierHttpService} from './patient-calendrier/patient-calendrier-http.service';
import {PatientMesPatientsComponent} from './patient-mes-patients/patient-mes-patients.component';



const routes: Routes = [
  {path: 'patient/mesrdvavenir', component: PatientCalendrierComponent},
  {path: 'patient/mesrdvpasses', component: PatientRdvInformationComponent},
  {path: 'patient/mesinfos', component: PatientMesPatientsComponent},
  {path: '', redirectTo: 'patient/mesrdvavenir', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    PatientDonneesUtilisateurComponent,
    PatientCalendrierComponent,
    PatientRdvInformationComponent,
    PatientMesPatientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],

  providers: [PatientMesPatientsHttpService, PatientRdvInformationHttpService,
    PatientCalendrierHttpService, PatientDonneesUtilisateurHttpService],

<<<<<<< Updated upstream
=======
  bootstrap: [AppComponent]
>>>>>>> Stashed changes
})
export class AppModule {
}
