import { AppSettings } from 'src/app/app.settings';
import {NgbModule, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';

import { LayoutModule } from './layout/layout.module';
import { LayoutClassicComponent } from './layout/layout-classic/layout-classic.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 2000
    })
    // Ng2SmartTableModule
    //.withComponents([])
  ],
  providers: [
    // AppSettings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
