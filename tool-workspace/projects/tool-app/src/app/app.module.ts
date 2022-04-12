import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedLibModule } from 'shared-lib';
import { ColorToolLibModule } from 'color-tool-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedLibModule,
    ColorToolLibModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
