import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ValidateInputComponent } from './validate-input/validate-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidateInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
