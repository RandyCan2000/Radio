import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../Servicios/servicios.service';
//modulo que permite saber el parametro enviado en la ruta
import { ActivatedRoute } from '@angular/router';
import { Users } from '../../Model/Users';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Users:Users[];
  Us;
  UserProfile:Users;
  constructor(private Servicio:ServiciosService,private router:ActivatedRoute) {//ActivedRoute deja manipular parametros
    //console.log(router.snapshot.params['id']); comando para recuperar el parametro mandado en la ruta de angular
    //Servicio.getUser(router.snapshot.params['id'])
    this.Us=Servicio.getUser(router.snapshot.params['id']);
    this.Us=this.Us.subscribe(Us=>{
      //aqui adentro manipular el registro
      console.log(Us.payload.data());
      this.UserProfile=Us.payload.data()as Users;
      /*this.coverPage=Us.payload.data().coverpage;
      this.pictureProfile=Us.payload.data().picture;
      this.Name=Us.payload.data().user;
      this.Description=Us.payload.data().description; */
    });
  }

  ngOnInit(): void {
    this.Servicio.getAllUsers().subscribe(users=>{//variable users tiene el listado
      console.log(users);
    });
  }

}
