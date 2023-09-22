import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VoterService} from "../../service/voter.service";
import {VoterCheckModel} from "../../model/voter-check.model";
import {VoterCheckResponseModel} from "../../model/voter-check-response.model";

@Component({
  selector: 'yv-voter-status',
  templateUrl: './voter-status.component.html',
  styleUrls: ['./voter-status.component.scss']
})
export class VoterStatusComponent {

  public voterForm: FormGroup;
  public voterStatus:VoterCheckResponseModel|undefined=undefined;

  constructor(private voterService:VoterService) {
    this.voterForm=new FormGroup({
      appNumber: new FormControl('',[Validators.required]),
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      birthDate: new FormControl('',[Validators.required]),
      zipcode: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required])
    });
  }

  public onVoterSearch(regForm:HTMLFormElement):void {

    let voterCheckModel:VoterCheckModel=this.voterForm.value;
    console.debug("VoterStatusComponent::onVoterSearch::",voterCheckModel);

    this.voterService.checkVoterStater(voterCheckModel)
      .subscribe(
        (voterStatus)=>{
          console.debug("RegistrationFormComponent::onVoterSearch::",voterStatus);
          this.voterStatus=voterStatus;
        }
      )
  }

  protected readonly undefined = undefined;
}
