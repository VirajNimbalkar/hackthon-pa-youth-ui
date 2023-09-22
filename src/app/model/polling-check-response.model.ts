export class PollingCheckResponseModel {

  public id?:string;
  public constituency?:string;
  public criminal_case?:string;
  public education?:string;
  public first_name?:string;
  public last_name?:string;
  public middle_name?:string;

  public political_party?:string;
  public self_profession?:string;
  public spouse_profession?:string;
  public state?:string;
  public total_asset?:string;
  public total_liabilities?:string;


  public vision_statement?:string;
  public yearly_income?:string;
  public zip_code?:string;


  constructor(public pollingId?: string,public city?: string,public zipcode?: string,public address?:string,public county?:string) {
  }
}
