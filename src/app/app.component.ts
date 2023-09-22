import { Component } from '@angular/core';
import {UserAuthService} from "./service/user-auth.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'yv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public currentCls:string|undefined;
  constructor(private authService:UserAuthService,private route:Router,
              private activate:ActivatedRoute) {
    this.listenRoute();
  }

  public get isUserLogged():boolean {
    return this.authService.getLoginStatus().isLogged;
  }

  public logout():void {
    this.authService.logout();
    this.route.navigate(["/","login"])
  }

  private listenRoute():void {

    this.route.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(event =>
      {
        // this.currentCls = event.url;
        let et=event as {url:string};
        console.log(et.url);
        let path=et.url;
        switch (path) {
          case "/login":
              this.currentCls="bg-img-1";
              break;
          default:
            this.currentCls="bg-img-none";
        }

      });
  }
}
