import { Component, OnInit } from '@angular/core';

import { SeguridadService } from "../../service/seguridad.service";
import { Usuario } from "../../model/usuario";

@Component({
  selector: 'app-app-usuario',
  templateUrl: './app-usuario.component.html',
  styleUrls: ['./app-usuario.component.css']
})
export class AppUsuarioComponent implements OnInit {
  usuario: Usuario;
  usuarios: Usuario[];

  constructor(private service: SeguridadService) { }

  ngOnInit() {
    this.usuario = new Usuario();
    this.onMostrar();
  }

  onMostrar(): void {
    this.service.usuarioFindAll().then(response => {
      this.usuarios = response as Usuario[];
    })
      .catch(error => alert(error));
  }

  onEliminar(seleccionado: Usuario) {
    this.service.usuarioDelete(seleccionado).subscribe(
      (data) => this.usuarios = data as Usuario[],
      (error) => alert(error)
    );
  }

  onCrear(): void {
    this.service.usuarioCreate(this.usuario).subscribe(
      (data) => this.usuarios = data as Usuario[],
      (error) => alert(JSON.stringify(error))
    );
  }

}
