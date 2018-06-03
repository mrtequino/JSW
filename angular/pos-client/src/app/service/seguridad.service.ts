import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, pipe, Subscription, observable } from "rxjs";
import {
  map,
  tap,
  catchError,
  flatMap,
  concat,
  last,
  merge,
  combineAll,
  mergeMap
} from "rxjs/operators";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { ApplicationHttpClient } from "../security/application-http-client";

@Injectable({
  providedIn: "root"
})
export class SeguridadService implements OnInit {
  url: String = "http://192.168.1.53:8081";
  constructor(
    private httpClient: HttpClient,
    protected localStorage: LocalStorage
  ) {}

  ngOnInit() {
    this.url = "http://192.168.1.53:8081/";
  }

  ingresar(username: String, password: String): Observable<any> {
    let usuario = { username: username, password: password };
    return this.httpClient
      .post("http://192.168.1.53:8081/login", usuario, { observe: "response" })
      .pipe(
        tap(data => {
          this.localStorage
            .setItem("token", data.headers.get("authorization"))
            .subscribe();
        })
      );
  }

  usuariosGetAll(): Observable<any> {
    return this.localStorage.getItem("token").pipe(
      map(data => {
        return this.httpClient.get("http://192.168.1.53:8081/usuarios", {
          headers: new HttpHeaders().set("authorization", data)
        });
      })
    );
  }

  usuariosGetAllSinToken(): Observable<any> {
    return this.httpClient.get(this.url + "/usuarios");
  }

  getStreamPrueba(): Observable<any> {
    return this.httpClient.get("http://192.168.1.53:3000/datos", {
      responseType: "json"
    });
  }

  usuariosGetAll3(): Observable<any> {
    let token = "";
    return this.localStorage.getItem("token").pipe(
      tap(data => (token = data)),
      mergeMap(data => {
        return this.httpClient.get("http://192.168.1.53:8081/usuarios", {
          headers: new HttpHeaders().set("authorization", token)
        });
      })
    );
  }

  usuariosGetAll1(): Observable<any> {
    return this.localStorage.getItem("token").pipe(
      flatMap(data => {
        return this.httpClient.get("http://192.168.1.53:8081/usuarios", {
          headers: new HttpHeaders().set("authorization", data)
        });
      })
    );
  }

  usuariosGetAll2(): Promise<any> {
    return this.localStorage
      .getItem("token")
      .toPromise()
      .then(data => {
        return this.httpClient
          .get("http://192.168.1.53:8081/usuarios", {
            headers: new HttpHeaders().set("authorization", data)
          })
          .toPromise();
      });
  }
}
