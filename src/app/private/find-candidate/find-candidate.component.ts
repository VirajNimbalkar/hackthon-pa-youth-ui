import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VoterService} from "../../service/voter.service";
import {CandidateCheckModel} from "../../model/candidate-check.model";
import {PollingCheckResponseModel} from "../../model/polling-check-response.model";

@Component({
  selector: 'yv-find-candidate',
  templateUrl: './find-candidate.component.html',
  styleUrls: ['./find-candidate.component.scss']
})
export class FindCandidateComponent {

  public candidateForm: FormGroup;

  public pollingCheckResponseModel:PollingCheckResponseModel[]|undefined=undefined;
  constructor(private voterService:VoterService) {
    this.candidateForm=new FormGroup({
      city: new FormControl('',[Validators.required]),
      zipcode: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required])
    });
  }

  public onCandidateSearch(regForm:HTMLFormElement):void {

    let candidateCheckModel:CandidateCheckModel=this.candidateForm.value;
    console.debug("FindCandidateComponent::onCandidateSearch::",candidateCheckModel);

    this.voterService.findCandidate(candidateCheckModel)
      .subscribe(
        (resultFounds)=>{
          console.debug("FindCandidateComponent::onCandidateSearch::",resultFounds);
          this.pollingCheckResponseModel=resultFounds;
          // if(isSuccess){
          //   this.router.navigate(["/","regSuccess"]);
          // } else {
          //   this.router.navigate(["/","regFailed"]);
          // }
        }
      )
  }
}
