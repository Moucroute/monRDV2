import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PatientCalendrierComponent } from './patient-calendrier/patient-calendrier.component';
import { InscriptionFormPatientComponent } from './model/inscription-form-patient/inscription-form-patient.component';

@NgModule({
  declarations: [
    InscriptionFormPatientComponent
    PatientCalendrierComponent
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
