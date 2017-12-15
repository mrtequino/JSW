import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import decode from "jwt-decode";

import { Message } from 'primeng/primeng';

import { CredencialesModel } from "../../model/credenciales-model";
import { SeguridadService } from '../../service/seguridad-service';
import { Mensaje } from "../../util/mensaje";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  msgs: Message[] = [];

  credencialesModel: CredencialesModel;

  constructor(private service: SeguridadService, private router: Router, private mensaje: Mensaje) {

  }

  ngOnInit() {
    this.credencialesModel = new CredencialesModel();
  }

  onIngresar() {
    this.service.login(this.credencialesModel).subscribe(response => this.registrarSesion(response), error => this.mostrarError(error));
  }

  registrarSesion(response: Response) {
    sessionStorage.setItem("jwt", response.headers.get('Authorization'));
    let tokenJson: string = (decode(sessionStorage.getItem("jwt")) as { roles: "" }).roles;
    sessionStorage.setItem("roles", tokenJson);
    this.router.navigate(['/page-inicio']);
    this.mensaje.showInfo(this.msgs, "Bienvenido al sistema");
  }

  mostrarError(error: Error) {
    this.mensaje.showError(this.msgs, error);
  }



}
