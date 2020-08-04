import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { ProfileComponent } from './Componentes/profile/profile.component';
//servicio
import { ServiciosService } from './Servicios/servicios.service';
import { AngularFirestore } from '@angular/fire/firestore';
//firebase require
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { LoginComponent } from './Componentes/login/login.component';
import { ProfilesComponent } from './Componentes/profiles/profiles.component';

export const firebaseConfig={
  apiKey: "AIzaSyDa9IqHMtI8-GLoTCsqoPSy-kc65Gcy33A",
  authDomain: "databaseradio-95e7e.firebaseapp.com",
  databaseURL: "https://databaseradio-95e7e.firebaseio.com",
  projectId: "databaseradio-95e7e",
  storageBucket: "databaseradio-95e7e.appspot.com",
  messagingSenderId: "809920749517",
  appId: "1:809920749517:web:f1e53c0f2d3df63a58ae84",
  measurementId: "G-4BGK8C6QK1"
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    LoginComponent,
    ProfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), // Main Angular fire module 
    AngularFireDatabaseModule  // Firebase database module 
  ],
  providers: [ServiciosService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
