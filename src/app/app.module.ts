import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CssHighLighterDirective } from './shared/directives/cssHighLighter.dierctive';
import { CssHighliterWithRendrerDirective } from './shared/directives/cssHighlitherWithRendrer.directive';
import { LowerCaseDirective } from './shared/directives/lower-case.directive';
import { CreditCardDirective } from './shared/directives/credit-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    CssHighLighterDirective,
    CssHighliterWithRendrerDirective,
    LowerCaseDirective,
    CreditCardDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
