import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {UserAuthService} from "./user-auth.service";

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private router: Router, private authService: UserAuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //your logic goes here
    let isLoggedIn: boolean = this.authService.getLoginStatus().isLogged;
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/invalid-creds']).then(onSuccess=>{
        console.debug("PermissionsService::canActivate:: Navigation successfully.");
      },onRejected=>{
        console.debug("PermissionsService::canActivate:: Navigation got rejected...");
      });  // {4}
      return false;
    }
  }
}
