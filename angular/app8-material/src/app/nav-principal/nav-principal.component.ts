import { Component, OnInit } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
  MediaMatcher
} from "@angular/cdk/layout";
import { Observable, of } from "rxjs";
import { map, tap, mergeMap, combineLatest } from "rxjs/operators";

@Component({
  selector: "app-nav-principal",
  templateUrl: "./nav-principal.component.html",
  styleUrls: ["./nav-principal.component.scss"]
})
export class NavPrincipalComponent implements OnInit {
  isHandset$ = this.breakpointObserver.observe([Breakpoints.Handset]).pipe(
    //tap(x => console.log(x.matches)),
    map(result => result.matches)
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {}
}
