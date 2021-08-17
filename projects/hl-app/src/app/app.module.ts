import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HlDatetimepickerModule } from 'projects/hl-datetimepicker/src/public-api';
import { HlSelectModule } from 'projects/hl-select/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports : [
    
  ],
  imports: [
    HlDatetimepickerModule,
    HlSelectModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
