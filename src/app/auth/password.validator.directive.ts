import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[emailExist]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailExistance, multi: true}]
})
export class EmailExistance implements Validator {
  @Input('emailExist') emailExist = '';

  validate(control: AbstractControl): ValidationErrors | null {
    const mail = this.emailExist;
    const emailName = mail.substring(0, mail.indexOf('@'));
    if(control.value) {
      return control.value.includes(emailName) ? {'any short error message': true}: null;
    }else {
      return null
    }
  }
}