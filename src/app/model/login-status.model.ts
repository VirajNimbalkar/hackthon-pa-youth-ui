
export class LoginStatus {
  public isLogged:boolean = false;
  public isError:boolean = false;
  public error:string|undefined = undefined;

  private static _initialState:LoginStatus;
  public  static initialState():LoginStatus {
    if (!LoginStatus._initialState){
      LoginStatus._initialState=new LoginStatus();
    }
    return LoginStatus._initialState;
  }
}
