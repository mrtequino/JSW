import { Component, OnInit } from '@angular/core';

import { SeguridadService } from "../../service/seguridad.service";
import { Usuario } from "../../model/usuario";

@Component({
  selector: 'app-app-usuario',
  templateUrl: './app-usuario.component.html',
  styleUrls: ['./app-usuario.component.css']
})
export class AppUsuarioComponent implements OnInit {
  usuarios: Usuario[];

  constructor(private service: SeguridadService) { }

  ngOnInit() {
  }

  getUsuarios(): void {
    this.service.getUsuarios().then(response => {
      this.usuarios = response as Usuario[];
    })
      .catch(error => alert(error));
  }

  onUsuarioSeleccionar(seleccionado: Usuario) {
    alert(seleccionado.usuaUsuario);
  }

}
