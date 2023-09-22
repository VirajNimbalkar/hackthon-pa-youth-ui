import {Injectable} from '@angular/core';
import {UserModel} from "../model/user.model";
import {BehaviorSubject, filter, Observable, shareReplay, Subject} from "rxjs";
import {LoginStatus} from "../model/login-status.model";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private _user$: BehaviorSubject<UserModel | undefined> = new BehaviorSubject<UserModel | undefined>(undefined);
  private _loginStatus$: BehaviorSubject<LoginStatus> = new BehaviorSubject<LoginStatus>(LoginStatus.initialState());

  constructor() {
  }

  public getLoginStatus(): LoginStatus {
    return this._loginStatus$.value;
  }

  public loginStatus$(): Observable<LoginStatus> {
    return this._loginStatus$.pipe(shareReplay(1));
  }

  public getLoginUser(): UserModel | undefined {
    return this._user$.value;
  }

  public loggedUser(): Observable<UserModel|undefined> {
    return this._user$
      .pipe(
        shareReplay(1)
      );
  }


  public login(uName: string, pass: string): void {
    console.debug("UserAuthService::login::");

    if (uName == "test" && pass == "test") {
      let loginStatus: LoginStatus = new LoginStatus();
      loginStatus.isLogged = true;
      loginStatus.isError = false;
      loginStatus.error = undefined;
      this._loginStatus$.next(loginStatus);
    } else {
      let loginStatus: LoginStatus = new LoginStatus();
      loginStatus.isLogged = false;
      loginStatus.isError = true;
      loginStatus.error = "Credential are in correct.";
      this._loginStatus$.next(loginStatus);
    }
  }

  public logout(): void {
    let data = this.getLoginUser();
    console.debug("UserAuthService::logout::", data);
    let loginStatus: LoginStatus = new LoginStatus();
    loginStatus.isLogged = false;
    loginStatus.isError = false;
    loginStatus.error = undefined;
    this._loginStatus$.next(loginStatus);
  }
}
