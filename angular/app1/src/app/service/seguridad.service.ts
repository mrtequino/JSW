import { Injectable, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions } from "@angular/http";

// import { HttpInterceptor } from "../service/http.interceptor";

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Configuracion } from "../config/config";
import { Usuario } from "../model/usuario";
import { Rol } from "../model/rol";

@Injectable()
export class SeguridadService implements OnInit {
  urlBase: string = Configuracion.urlBase;
  headers: Headers;

  constructor(private http: Http) { }

  ngOnInit() {

  }

  login(usuario: Usuario): Promise<Response> {
    return this.http.post("login", JSON.stringify({ "username": usuario.usuaUsuario, "password": usuario.usuaClave }))
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(this.handleError);
  }

  usuarioFindAll(): Promise<Usuario[]> {
    return this.http.get(Configuracion.urlUsuarioFindAll)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  usuarioCreate(usuario: Usuario): Observable<Usuario[]> {
    return this.http.post(Configuracion.urlUsuarioCreate, usuario).map(res => res.json());
  }

  usuarioDelete(usuario: Usuario): Observable<Usuario[]> {
    return this.http.post(Configuracion.urlUsuarioDelete, usuario).map(res => res.json());
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  public getRoles(): Observable<Rol[]> {
    return this.http.get(Configuracion.urlRolFindAll).map(res => res.json());
  }

  /**
   public loginObservable(usuario: Usuario): Observable<Object> {
     return this.http.post("login", JSON.stringify({ "username": usuario.usuaUsuario, "password": usuario.usuaClave })).map(res => res.headers);
   }
   */



}
