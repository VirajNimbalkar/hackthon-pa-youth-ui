import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VoterService} from "../../service/voter.service";
import {CandidateCheckModel} from "../../model/candidate-check.model";

@Component({
  selector: 'yv-request-ballot',
  templateUrl: './request-ballot.component.html',
  styleUrls: ['./request-ballot.component.scss']
})
export class RequestBallotComponent {


  public requestBallotForm: FormGroup;
  constructor(private voterService:VoterService) {
    this.requestBallotForm=new FormGroup({
      city: new FormControl('',[Validators.required]),
      zipcode: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required])
    });
  }

  public onBallotMail(regForm:HTMLFormElement):void {

    let candidateCheckModel:CandidateCheckModel=this.requestBallotForm.value;
    console.debug("RequestBallotComponent::onBallotMail::",candidateCheckModel);

    this.voterService.registerVoter(candidateCheckModel)
      .subscribe(
        (isSuccess)=>{
          console.debug("RequestBallotComponent::onBallotMail::",isSuccess);
          // if(isSuccess){
          //   this.router.navigate(["/","regSuccess"]);
          // } else {
          //   this.router.navigate(["/","regFailed"]);
          // }
        }
      )
  }
}
