import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistrationModel} from "../../model/registration.model";
import {VoterService} from "../../service/voter.service";
import {Router} from "@angular/router";

@Component({
  selector: 'yv-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {

  public regForm: FormGroup;

  constructor(private voterService:VoterService,private router:Router) {

    this.regForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      middleName: new FormControl('',[Validators.required]),
      birthDate: new FormControl('',[Validators.required]),
      citizen: new FormControl('',[Validators.required]),
      ageRange: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      emailId: new FormControl('',[Validators.required]),
      state: new FormControl({value: 'Pennsylvania', disabled: true},[Validators.required]),
      city: new FormControl('City',[Validators.required]),
      inputAddress: new FormControl('',[Validators.required]),
      inputAddress2: new FormControl('',[Validators.required]),
      zipcode: new FormControl('',[Validators.required]),

      mailState: new FormControl({value: 'Pennsylvania', disabled: true},[Validators.required]),
      mailCity: new FormControl('City',[Validators.required]),
      mailAddress: new FormControl('',[Validators.required]),
      mailAddress2: new FormControl('',[Validators.required]),
      mailZipcode: new FormControl('',[Validators.required]),

      paDriverLicense: new FormControl('',[Validators.required]),
      ssn: new FormControl('',[Validators.required]),
      pp: new FormControl('',[Validators.required]),

    });
  }

  public onSubmit(regForm:HTMLFormElement):void {

    let regFormModel:RegistrationModel=this.regForm.value;
    console.debug("RegistrationFormComponent::onSubmit::",regFormModel);

    this.voterService.registerVoter(regFormModel)
      .subscribe(
        (registrationModel)=>{
          console.debug("RegistrationFormComponent::registerVoter::",registrationModel);
            if(registrationModel){
              this.router.navigate(["/","regSuccess"],{queryParams:{registrationModel:registrationModel}});
            } else {
              this.router.navigate(["/","regFailed"]);
            }
        }
      )
  }

}
