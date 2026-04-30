import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[basicCss]'
})

export class CssHighLighterDirective implements OnInit{
    constructor(private _eleRef:ElementRef){}
    ngOnInit(): void {
        console.log(this._eleRef.nativeElement,"Directive cssHighLighter Init")
        this._eleRef.nativeElement.style.backgroundColor="Orange";
        this._eleRef.nativeElement.style.padding="10px";
        this._eleRef.nativeElement.style.color='#fff';
    }
}