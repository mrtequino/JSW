import { Injectable, OnInit } from "@angular/core";
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CredencialesModel } from "../model/credenciales-model";


@Injectable()
export class SeguridadService implements OnInit {

    constructor(private http: Http) { }

    ngOnInit(): void {

    }

    login(credenciales: CredencialesModel): Observable<any> {
        return this.http.post("login", credenciales).map(res => res);
    }

}