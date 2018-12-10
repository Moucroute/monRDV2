import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PatientMesPatientsComponent} from './patient-mes-patients/patient-mes-patients.component';
import {PatientMesPatientsHttpService} from './patient-mes-patients/patient-mes-patients-http.service';
import {RouterModule} from '@angular/router';
import { PatientCalendrierComponent } from './patient-calendrier/patient-calendrier.component';
import { InscriptionFormPatientComponent } from './model/inscription-form-patient/inscription-form-patient.component';
import { PatientDonneesUtilisateurComponent } from './patient-donnees-utilisateur/patient-donnees-utilisateur.component';


const routes: Routes = [

  {path: 'patient/mesrdvavenir', component: PatientCalendrierComponent},
  {path: 'patient/mesrdvpasses', component: PatientRdvInformationComponent},
  {path: 'patient/mesinfos', component: PatientDonneesUtilisateurComponent, PatientMesPatientsComponent},
  {path: '', redirectTo: 'patient/mesrdvavenir', pathMatch: 'full'},

]


@NgModule({
  declarations: [
    AppComponent,
    PatientDonneesUtilisateurComponent
    InscriptionFormPatientComponent
    PatientCalendrierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),


  ],
  providers: [PatientMesPatientsHttpService, PatientRdvInformationHttpService, PatientCalendrierHttpService, PatientDonneesUtilisateurHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
