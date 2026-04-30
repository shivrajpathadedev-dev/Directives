import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor() { }

  @HostListener('input', ['$event'])
  validateCreditCard(eve:Event){
    let inputControl=eve.target as HTMLInputElement;
    let val=inputControl.value.replace(/\s+/g,"")
    // console.log(val);

    if(val.length >16){
      val=val.substring(0,16)
    }
    console.log(val);

    inputControl.value=val
  }
}
