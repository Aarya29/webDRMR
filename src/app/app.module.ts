import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PsModuleModule } from './ps-module/ps-module.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PsModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
