import { Directive, ElementRef, Host, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLowerCase]'
})
export class LowerCaseDirective {

  constructor(
    private _eleRef : ElementRef,
    private _render : Renderer2
  ) { }

  @HostListener('keyup')
  onSearch(){
  // console.log('Triggred!!!')
  let val=(this._eleRef.nativeElement.value as string).toLowerCase()
  console.log(val);
  this._eleRef.nativeElement.value=val
  } 

 
}
