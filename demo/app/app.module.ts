import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartComponent } from '@angeeks/chart';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    ChartComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
