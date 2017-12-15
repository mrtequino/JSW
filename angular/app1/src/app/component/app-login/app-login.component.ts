import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as decode from 'jwt-decode';

import { Usuario } from "../../model/usuario";
import { SeguridadService } from "../../service/seguridad.service";

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  date1: Date;

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  usuario: Usuario;

  constructor(private router: Router, private service: SeguridadService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  onIngresar(): void {
    this.service.login(this.usuario)
      .then(response => {
        sessionStorage.setItem("jwt", response.headers.get('Authorization'));
        let tokenJson: string = (decode(sessionStorage.getItem("jwt")) as { roles: "" }).roles;
        sessionStorage.setItem("roles", tokenJson);
        this.router.navigate(['/app-inicio']);
      })
      .catch(error => { alert("error controlado:" + error) })
  }



  /** 
  onIngresarObservable(): void {
    this.service.loginObservable(this.usuario)
      .subscribe(
      (data: Object) => { alert("correcto: " + data) },
      (error: any) => { alert("error: " + JSON.stringify(error)) },
      () => { alert('completo') }
      );
  }
  */

}
