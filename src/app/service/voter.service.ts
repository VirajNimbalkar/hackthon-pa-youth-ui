import {Injectable} from "@angular/core";
import {RegistrationModel} from "../model/registration.model";
import {map, Observable, of} from "rxjs";
import {VoterCheckModel} from "../model/voter-check.model";
import {VoterCheckResponseModel} from "../model/voter-check-response.model";
import {PollingCheckResponseModel} from "../model/polling-check-response.model";
import {PollingCheckModel} from "../model/polling-check.model";
import {HttpClient} from "@angular/common/http";
import {UrlConfigConstant} from "../model/url-config.constant";
import {CandidateCheckModel} from "../model/candidate-check.model";
import {CandidateCheckResponseModel} from "../model/candidate-check-response.model";


@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private httpClient:HttpClient) {

  }


  public registerVoter(registrationModel:RegistrationModel):Observable<RegistrationModel> {
    console.debug("VoterService::registerVoter::",registrationModel);
    let url:string=UrlConfigConstant.REG_API+"/voter/registration";
    // return this.httpClient.post(
    //   url,
    //   registrationModel
    // );


    // return of(2%this.getRandomInt(2)==0);
    return  of(registrationModel);

  }

  public checkVoterStater(voterCheckModel:VoterCheckModel):Observable<VoterCheckResponseModel> {
    console.debug("VoterService::checkVoterStater::",voterCheckModel);
    let response:VoterCheckResponseModel[]= [];
      response.push(new VoterCheckResponseModel("Not Found"));
      response.push(new VoterCheckResponseModel("Successful"));
      response.push(new VoterCheckResponseModel("Rejected","Provided SSN is invalid"));


    return of(response[this.getRandomInt(3)]);

  }

  public findPollingStation(pollingCheckModel:PollingCheckModel):Observable<PollingCheckResponseModel[]> {
    console.debug("VoterService::findPollingStation::",pollingCheckModel);
    let response:PollingCheckResponseModel[]= [];
    response.push(new PollingCheckResponseModel("5125","Pittsburgh","123D","Zone 1,Street A, Block AB","Columbia"));
    response.push(new PollingCheckResponseModel("3145","Allentown","AA1","The Wall, New Path","Washington"));
    response.push(new PollingCheckResponseModel("6135","Philadelphia","123D","Central Building,Becker Street","Adams"));


    return of(response);

  }

  public findCandidate(pollingCheckModel:CandidateCheckModel):Observable<CandidateCheckResponseModel[]> {
    console.debug("VoterService::findCandidate::",pollingCheckModel);
    // let response:PollingCheckResponseModel[]= [];
    // response.push(new PollingCheckResponseModel("5125","Pittsburgh","123D","Zone 1,Street A, Block AB","Columbia"));
    // response.push(new PollingCheckResponseModel("3145","Allentown","AA1","The Wall, New Path","Washington"));
    // response.push(new PollingCheckResponseModel("6135","Philadelphia","123D","Central Building,Becker Street","Adams"));
    // let url:string=UrlConfigConstant.API+"/candidates/firstName/{name}/";
    let url:string=UrlConfigConstant.CANDIDATE_API+"/candidates/zipCode/"+pollingCheckModel.zipcode;
    // let url:string=UrlConfigConstant.API+"/candidates/city/{city}";
    return this.httpClient.get(url).pipe(map(data=>data as CandidateCheckResponseModel[]));

    // return of(response);

  }




  private getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }


}
