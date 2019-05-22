import { Component, OnInit } from "@angular/core";
import { SeguridadService } from "../../service/seguridad.service";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { MessageService } from "../../service/message.service";

@Component({
  selector: "app-w3css-example",
  templateUrl: "./w3css-example.component.html",
  styleUrls: ["./w3css-example.component.css"]
})
export class W3cssExampleComponent implements OnInit {
  username: String = "";
  password: String = "";
  usuarios = [];
  stream1: String;

  constructor(
    private seguridadService: SeguridadService,
    protected localStorage: LocalStorage,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  onCerrarMensajes(): void {
    this.messageService.messages = [];
  }

  onIngresar(): void {
    this.seguridadService.ingresar(this.username, this.password).subscribe();
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

  onConsultarSinToken(): void {
    this.seguridadService.usuariosGetAllSinToken().subscribe(
      data => {
        console.log(data);
        this.usuarios = data._embedded.usuarios;
      },
      error => {
        window.alert(JSON.stringify(error));
      }
    );
  }

  onConsultarStream(): void {
    this.seguridadService.getStreamPrueba().subscribe(
      data => {
        //console.log(data);
        this.stream1 = data.valor;
      },
      error => {
        window.alert(JSON.stringify(error));
      }
    );
  }
}
