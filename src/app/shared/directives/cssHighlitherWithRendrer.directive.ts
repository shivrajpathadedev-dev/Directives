import { Expression } from "@angular/compiler";
import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[advanceCss]'
})

export class CssHighliterWithRendrerDirective implements OnInit {
  constructor(
    private _eleRef: ElementRef,
    private _rendrer: Renderer2
  ) {

  }
  ngOnInit(): void {
    // this._rendrer.setStyle(this._eleRef.nativeElement, 'background-color','blueviolet')
    // this._rendrer.setStyle(this._eleRef.nativeElement, 'color','#fff')
    // this._rendrer.setStyle(this._eleRef.nativeElement, 'padding','10px')
    // this._rendrer.addClass(this._eleRef.nativeElement,'alert')
    // this._rendrer.addClass(this._eleRef.nativeElement,'alert-info')


  }

  @HostListener('mouseover')
  OnMouseOver() {
    this._rendrer.setStyle(this._eleRef.nativeElement, 'background-color', 'blueviolet')
    this._rendrer.setStyle(this._eleRef.nativeElement, 'color', '#fff')
    this._rendrer.setStyle(this._eleRef.nativeElement, 'padding', '10px')
  }
  @HostListener('mouseout')
  OnMouseOut() {
    this._rendrer.setStyle(this._eleRef.nativeElement, 'background-color', 'transparent')
    this._rendrer.setStyle(this._eleRef.nativeElement, 'color', 'blue')
    this._rendrer.setStyle(this._eleRef.nativeElement, 'padding', '10px')
  }

}