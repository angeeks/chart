import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartModule } from '@angeeks/chart';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ChartModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
