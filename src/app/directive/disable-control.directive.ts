import { NgControl } from '@angular/forms';
import {Directive, Input} from "@angular/core";

@Directive({
  selector: '[disableControl]'
})
export class DisableControlDirective {

  @Input() set disableControl( condition : boolean ) {
    const action = condition ? 'disable' : 'enable';
    console.debug("DisableControlDirective::disableControl::",this.ngControl.control,action)
    if(this.ngControl!=null && this.ngControl.control!=null)
      this.ngControl.control[action]();
  }

  constructor( private ngControl : NgControl ) {
  }

}
