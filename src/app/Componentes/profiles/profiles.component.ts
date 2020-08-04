import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../Servicios/servicios.service';
import { Users } from '../../Model/Users';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  Usuarios:Users[]=[];

  constructor(private Servicios:ServiciosService) {
  }

  ngOnInit(): void {
    this.Servicios.getAllUsers().subscribe(users=>{//variable users tiene el listado
      this.Usuarios=users;
    });
  }

}
