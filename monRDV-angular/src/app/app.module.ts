import {AppComponent} from './app.component';
import {PatientMesPatientsComponent} from './patient-mes-patients/patient-mes-patients.component';
import {PatientMesPatientsHttpService} from './patient-mes-patients/patient-mes-patients-http.service';
import {PatientCalendrierComponent} from './patient-calendrier/patient-calendrier.component';
import {PatientDonneesUtilisateurComponent} from './patient-donnees-utilisateur/patient-donnees-utilisateur.component';
import {PatientRdvInformationHttpService} from './patient-rdv-information/patient-rdv-information-http.service';
import {PatientCalendrierHttpService} from './patient-calendrier/patient-calendrier-http.service';
import {PatientDonneesUtilisateurHttpService} from './patient-donnees-utilisateur/patient-donnees-utilisateur-http.service';
import {PatientRdvInformationComponent} from './patient-rdv-information/patient-rdv-information.component';
import {PatientMesRdvAVenirComponent} from './patient-mes-rdv-a-venir/patient-mes-rdv-a-venir.component';
import {PatientMesRdvPassesComponent} from './patient-mes-rdv-passes/patient-mes-rdv-passes.component';
import {PatientMesInfosComponent} from './patient-mes-infos/patient-mes-infos.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import { PatientInscriptionComponent } from './patient-inscription/patient-inscription.component';
import {PatientInscriptionHttpService} from "./patient-inscription/patient-inscription-http.service";
import { ConnexionComponent } from './connexion/connexion.component';
import {ConnexionService} from "./connexion/connexion.service";


const routes: Routes = [

  {path: 'patient/mesrdvavenir', component: PatientMesRdvAVenirComponent},
  {path: 'patient/mesrdvpasses', component: PatientMesRdvPassesComponent},
  {path: 'patient/mesinfos/:id', component: PatientMesInfosComponent},
  {path: 'patient/inscription', component: PatientInscriptionComponent},
  {path: 'patient/connexion', component: ConnexionComponent},

  {path: '', redirectTo: '/', pathMatch: 'full'},

]


@NgModule({
  declarations: [
    AppComponent,
    PatientDonneesUtilisateurComponent,
    PatientCalendrierComponent,
    PatientRdvInformationComponent,
    PatientMesPatientsComponent,
    PatientMesRdvAVenirComponent,
    PatientMesRdvPassesComponent,
    PatientMesInfosComponent,
    PatientInscriptionComponent,
    PatientMesInfosComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PatientMesPatientsHttpService, PatientRdvInformationHttpService, PatientInscriptionHttpService,
    PatientCalendrierHttpService, PatientDonneesUtilisateurHttpService, ConnexionService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
