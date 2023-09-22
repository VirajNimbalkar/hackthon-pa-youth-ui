import { Component } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {UserAuthService} from "../../service/user-auth.service";
import {LoginDetails} from "../../model/login.model";
import {Router} from "@angular/router";

@Component({
  selector: 'yv-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public loginForm: FormGroup;
  constructor(private authService:UserAuthService,private router:Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('test',[Validators.required]),
      password: new FormControl('test',[Validators.required])
    });
    this.listenLogin();
  }
  public onSubmit(form:HTMLFormElement) {

    console.debug("LoginPageComponent::onSubmit::",this.loginForm && this.loginForm.value,form)
    let loginDetails:LoginDetails=this.loginForm.value;
    if(!!loginDetails.username && !! loginDetails.password) {
      console.debug("LoginPageComponent::onSubmit:: Login user in system");
      this.authService.login(loginDetails.username, loginDetails.password);
    }
  }

  private listenLogin():void {
    this.authService.loginStatus$()
      .subscribe((status)=>{
          if(status.isLogged){
            this.router.navigate(["/","home-page"])
              .then(
                ()=>{
                  console.debug("LoginPageComponent::listenLogin:: Navigated properly");
                },
                ()=>{
                  console.debug("LoginPageComponent::listenLogin:: Navigation failed");
                }
              );
          }

      });
  }

}
