import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicHomeComponent} from "./public/public-home/public-home.component";
import {PageNotFoundComponent} from "./public/page-not-found/page-not-found.component";
import {GamifyComponent} from "./public/gamify/gamify.component";
import {NotAuthenticatedComponent} from "./public/not-authenticated/not-authenticated.component";
import {AuthGuard} from "./guard/auth.guard";
import {LoginPageComponent} from "./public/login-page/login-page.component";
import {RegistrationFormComponent} from "./public/registration-form/registration-form.component";
import {RegistrationSuccessComponent} from "./public/registration-success/registration-success.component";
import {RegistrationFailedComponent} from "./public/registration-failed/registration-failed.component";
import {RequestBallotComponent} from "./private/request-ballot/request-ballot.component";
import {FindCandidateComponent} from "./private/find-candidate/find-candidate.component";
import {PollingStationComponent} from "./private/polling-station/polling-station.component";
import {VoterStatusComponent} from "./private/voter-status/voter-status.component";

const routes: Routes = [
  {path: 'gamiy', component: GamifyComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegistrationFormComponent},
  {path: 'regSuccess', component: RegistrationSuccessComponent},
  {path: 'regFailed', component: RegistrationFailedComponent},
  {path: 'home-page', component: PublicHomeComponent, canActivate: [AuthGuard]},
  {path: 'status-check', component: VoterStatusComponent},
  {path: 'find-polling', component: PollingStationComponent},
  {path: 'find-candidate', component: FindCandidateComponent},
  {path: 'request-ballot', component: RequestBallotComponent},
  {path: 'invalid-creds', component: NotAuthenticatedComponent},
  // {path: '**', component: PageNotFoundComponent},
  {path: '**', redirectTo:"register"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
