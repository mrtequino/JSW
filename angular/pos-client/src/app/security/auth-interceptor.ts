import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { Observable } from "rxjs";
import { mergeMap } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(protected localStorage: LocalStorage) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    //const authToken = this.auth.getAuthorizationToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.

    //if (req.url == "http://192.168.1.53:8081/") {
    return this.localStorage.getItem("token").pipe(
      mergeMap(authToken => {
        const authReqToken: HttpRequest<any> = req.clone({
          headers: req.headers.set("Authorization", authToken)
        });
        // send cloned request with header to the next handler.
        return next.handle(authReqToken);
      })
    );
    //}
    //return next.handle(authReq);
  }
}
