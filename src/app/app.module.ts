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
import { environment } from '../environments/environment';
import { LoginComponent } from './Componentes/login/login.component';
import { ProfilesComponent } from './Componentes/profiles/profiles.component';

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
    AngularFireModule.initializeApp(environment.firebaseConfig), // Main Angular fire module 
    AngularFireDatabaseModule  // Firebase database module 
  ],
  providers: [ServiciosService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
