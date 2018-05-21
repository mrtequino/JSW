import { Component } from "@angular/core";
import { SeguridadService } from "./service/seguridad.service";
import { LocalStorage } from "@ngx-pwa/local-storage";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  username: String = "";
  password: String = "";
  usuarios = [];

  constructor(
    private seguridadService: SeguridadService,
    protected localStorage: LocalStorage
  ) {}

  onIngresar(): void {
    this.seguridadService.ingresar(this.username, this.password).subscribe(
      data => {
        this.localStorage.getItem("token").subscribe(data => {
          //if (!data) {}
          window.alert(JSON.stringify(data));
        });
      },
      error => {
        window.alert(error);
      }
    );
  }

  onConsultar(): void {
    this.seguridadService.usuariosGetAll().subscribe(
      data => {
        data.subscribe(data => {
          console.log(data);
          this.usuarios = data._embedded.usuarios;
        });
      },
      error => {
        window.alert(JSON.stringify(error));
      }
    );
  }

  onConsultarObservable(): void {
    this.seguridadService.usuariosGetAll1().subscribe(
      data => {
        console.log(data);
        this.usuarios = data._embedded.usuarios;
      },
      error => {
        window.alert(JSON.stringify(error));
      }
    );
  }


  onConsultarObservableConVariable(): void {
    this.seguridadService.usuariosGetAll3().subscribe(
      data => {
        console.log(data);
        this.usuarios = data._embedded.usuarios;
      },
      error => {
        window.alert(JSON.stringify(error));
      }
    );
  }

  onConsultarPromise(): void {
    this.seguridadService.usuariosGetAll2().then(
      data => {
        console.log(data);
        this.usuarios = data._embedded.usuarios;
      },
      error => {
        window.alert(JSON.stringify(error));
      }
    );
  }
}
