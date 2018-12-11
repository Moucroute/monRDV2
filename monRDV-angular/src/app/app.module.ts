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


const routes: Routes = [

  {path: 'patient/mesrdvavenir', component: PatientMesRdvAVenirComponent},
  {path: 'patient/mesrdvpasses', component: PatientRdvInformationComponent},
  {path: 'patient/mesinfos', component: PatientMesInfosComponent},
  {path: '', redirectTo: 'patient/mesrdvavenir', pathMatch: 'full'},

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
    PatientMesInfosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PatientMesPatientsHttpService, PatientRdvInformationHttpService,
    PatientCalendrierHttpService, PatientDonneesUtilisateurHttpService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
