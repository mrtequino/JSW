import { Component, OnInit } from '@angular/core';

import { SeguridadService } from "../../service/seguridad.service";
import { Rol } from "../../model/rol";

@Component({
  selector: 'app-app-rol',
  templateUrl: './app-rol.component.html',
  styleUrls: ['./app-rol.component.css']
})
export class AppRolComponent implements OnInit {

  roles: Rol[];

  constructor(private service: SeguridadService) { }

  ngOnInit() {
  }

  getRoles(): void {
    this.service.getRoles().subscribe((data) => this.roles = data, (error) => alert(error));
  }

  onRolSeleccionar(seleccionado: Rol) {
    alert(seleccionado.roleRol);
  }

}
