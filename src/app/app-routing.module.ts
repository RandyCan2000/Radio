import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { ProfileComponent } from './Componentes/profile/profile.component';
import { ProfilesComponent } from './Componentes/profiles/profiles.component';
const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:LoginComponent
      },
      {
        path:'profiles',
        component:ProfilesComponent
      },
      {
        path:'profiles/:id',
        component:ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
