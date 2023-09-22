import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicHomeComponent } from './public/public-home/public-home.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { GamifyComponent } from './public/gamify/gamify.component';
import {NgOptimizedImage} from "@angular/common";
import { NotAuthenticatedComponent } from './public/not-authenticated/not-authenticated.component';
import { LoginPageComponent } from './public/login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistrationFormComponent } from './public/registration-form/registration-form.component';
import {DisableControlDirective} from "./directive/disable-control.directive";
import { RegistrationSuccessComponent } from './public/registration-success/registration-success.component';
import { RegistrationFailedComponent } from './public/registration-failed/registration-failed.component';
import { VoterStatusComponent } from './private/voter-status/voter-status.component';
import { PollingStationComponent } from './private/polling-station/polling-station.component';
import { FindCandidateComponent } from './private/find-candidate/find-candidate.component';
import { RequestBallotComponent } from './private/request-ballot/request-ballot.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PublicHomeComponent,
    PageNotFoundComponent,
    GamifyComponent,
    NotAuthenticatedComponent,
    LoginPageComponent,
    RegistrationFormComponent,
    DisableControlDirective,
    RegistrationSuccessComponent,
    RegistrationFailedComponent,
    VoterStatusComponent,
    PollingStationComponent,
    FindCandidateComponent,
    RequestBallotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
