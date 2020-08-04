import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { ProfileComponent } from './Componentes/profile/profile.component';
import { ProfilesComponent } from './Componentes/profiles/profiles.component';
const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'profiles',
    children:[
      {
        path:'',
        component:ProfilesComponent
      },
      {
        path:':id',
        component:ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash:true
      /*TODO enableTracing : true
        paramsInheritanceStrategy:'always'
      */
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
