import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.verificarSesion();
  }

  verificarSesion(): void {
    if (!sessionStorage.getItem("jwt")) {
      this.router.navigate(['/app-login']);
    }
  }

  existsSession(): boolean {
    if (sessionStorage.length > 0) {
      return true;
    }
    return false;
  }

  hasRole(rolParam: string): boolean {
    let retorno: boolean = false;
    if (sessionStorage.getItem("jwt")) {
      let roles: [{ rol: "" }] = JSON.parse(sessionStorage.getItem("roles")) as [{ rol: "" }];
      for (let rol of roles) {
        if (rol.rol == rolParam) {
          return true;
        }
      }
    }
    return retorno;
  }

  logout(): void {
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("roles");
    this.router.navigate(['/app-login']);
  }
}
