import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VoterService} from "../../service/voter.service";
import {VoterCheckModel} from "../../model/voter-check.model";
import {PollingCheckModel} from "../../model/polling-check.model";
import {PollingCheckResponseModel} from "../../model/polling-check-response.model";

@Component({
  selector: 'yv-polling-station',
  templateUrl: './polling-station.component.html',
  styleUrls: ['./polling-station.component.scss']
})
export class PollingStationComponent {

  public pollingForm: FormGroup;
  public pollingStation:PollingCheckResponseModel[]|undefined;
  constructor(private voterService:VoterService) {
    this.pollingForm=new FormGroup({
      city: new FormControl('',[Validators.required]),
      state: new FormControl('',[Validators.required]),
      zipcode: new FormControl('',[Validators.required]),
      county: new FormControl('',[Validators.required])
    });
  }

  public onPollingSearch(regForm:HTMLFormElement):void {

    let pollingCheckModel:PollingCheckModel=this.pollingForm.value;
    console.debug("PollingStationComponent::onPollingSearch::",pollingCheckModel);

    this.voterService.findPollingStation(pollingCheckModel)
      .subscribe(
        (pollingStation)=>{
          console.debug("PollingStationComponent::onPollingSearch::",pollingStation);
          this.pollingStation=pollingStation;
        }
      )
  }

}
