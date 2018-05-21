import { Component } from "@angular/core";
import { HttpResponse, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Usuario } from "./dto/usuario";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  usuarios = new Array<Usuario>();

  display: String = "none";

  mensaje: String;

  constructor(private http: HttpClient) {}

  getUsuarios(): void {
    this.mensaje = "pendiente...";
    this.http
      .get<Usuario[]>("http://192.168.1.53:3000/api/usuario-rxjs")
      .subscribe(
        data => (this.usuarios = data),
        error => {
          window.alert(error.message);
          this.mensaje = "";
        },
        () => {
          this.mensaje = "completado";
        }
      );
  }

  w3_open() {
    this.display = "block";
  }
  w3_close() {
    this.display = "none";
  }
}
